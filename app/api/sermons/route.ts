
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import OpenAI from 'openai';

// Inicializa o cliente da OpenAI com a chave de API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { sessionClaims, userId: clerkUserId } = auth();
  
  if (!clerkUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const params = await request.json();

  // 1. Buscar o DNA do pregador no banco de dados
  const dnaProfile = await prisma.dnaProfile.findUnique({
    where: { userId: clerkUserId },
  });

  if (!dnaProfile) {
    return new Response("DNA Profile not found", { status: 404 });
  }

  // 2. Montar o "Super Prompt" para a IA
  const systemPrompt = `
    Você é um assistente de pregação especialista, treinado em teologia e homilética. Sua missão é gerar um sermão completo, profundo e bem estruturado.
    
    SIGA ESTRITAMENTE AS SEGUINTES DIRETRIZES:
    - O sermão deve ser biblicamente fundamentado e teologicamente sólido.
    - O sermão deve refletir o DNA do pregador:
        - Estilo de Pregação: ${dnaProfile.style || 'Expositivo'}
        - Tom da Pregação: ${dnaProfile.tone || 'Inspirador'}
    - O sermão DEVE ser formatado em Markdown, com títulos (h1, h2), listas de tópicos (*) e ênfase (negrito **).
    - A estrutura deve ser:
        1.  **Introdução:** Cativante, apresentando o tema e a necessidade.
        2.  **Pontos Principais:** Pelo menos 2 ou 3 pontos bem desenvolvidos, com explicações, referências bíblicas e exemplos práticos.
        3.  **Conclusão:** Um resumo poderoso com uma chamada à ação ou reflexão final.
    - Juntamente com o sermão, gere sugestões de enriquecimento.
  `;

  const userPrompt = `
    Por favor, gere um sermão sobre o tema "${params.theme}".
    O propósito principal da mensagem é "${params.purpose}".
    O público-alvo são "${params.audience}".
    A duração aproximada deve ser de ${params.duration} minutos.
    Se houver um texto base fornecido, use-o como inspiração principal: "${params['custom-prompt'] || 'Nenhum texto base fornecido'}".

    A resposta DEVE ser um objeto JSON com a seguinte estrutura: { "sermonContent": "...", "enrichmentSuggestions": "..." }
  `;

  try {
    // 3. Chamar a API da OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');

    // 4. Salvar o sermão gerado no banco de dados
    const newSermon = await prisma.sermon.create({
      data: {
          userId: clerkUserId,
          title: `Sermão sobre ${params.theme || 'Vida Cristã'}`,
          content: result.sermonContent || "Ocorreu um erro ao gerar o conteúdo.",
          enrichmentSuggestions: result.enrichmentSuggestions || "Nenhuma sugestão gerada.",
          parameters: params,
      }
    });

    return NextResponse.json(newSermon);

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return new Response("Failed to generate sermon", { status: 500 });
  }
}
