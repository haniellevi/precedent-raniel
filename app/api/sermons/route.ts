
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const { sessionClaims, userId: clerkUserId } = auth();
  
  if (!clerkUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const params = await request.json();

  // AQUI ENTRARÁ A LÓGICA DE CHAMADA À IA NO FUTURO
  // Por enquanto, vamos guardar um sermão de exemplo na base de dados

  const newSermon = await prisma.sermon.create({
    data: {
        userId: clerkUserId,
        title: `Sermão sobre ${params.theme || 'Vida Cristã'}`,
        content: `Este é um sermão gerado sobre ${params.theme}. O conteúdo completo será criado pela IA.`,
        parameters: params,
        enrichmentSuggestions: "Sugestões de enriquecimento geradas pela IA aparecerão aqui.",
    }
  });

  return NextResponse.json(newSermon);
}
