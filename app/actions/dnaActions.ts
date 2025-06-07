
'use server';

// Esta diretiva 'use server' transforma este ficheiro num módulo de Server Actions.
// O código aqui só é executado no servidor, é seguro e nunca é enviado para o navegador.

import { z } from 'zod';

// Zod é uma biblioteca para validação de dados. É uma ótima prática
// para garantir que os dados do formulário cheguem como esperamos.
const DnaFormSchema = z.object({
  youtubeLink: z.string().url().optional().or(z.literal('')),
  personalDescription: z.string().min(10, { message: 'A descrição deve ter pelo menos 10 caracteres.' }),
  // Futuramente, adicionaremos a validação do ficheiro aqui.
});

export async function processDnaData(formData: FormData) {
  // 1. Validar os dados do formulário
  const validatedFields = DnaFormSchema.safeParse({
    youtubeLink: formData.get('youtubeLink'),
    personalDescription: formData.get('personalDescription'),
  });

  if (!validatedFields.success) {
    console.error('Erros de Validação:', validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { youtubeLink, personalDescription } = validatedFields.data;

  // 2. Imprimir os dados na consola do servidor para confirmar a receção
  console.log('--- DADOS RECEBIDOS NO SERVIDOR ---');
  console.log('Link do YouTube:', youtubeLink);
  console.log('Descrição Pessoal:', personalDescription);
  console.log('-----------------------------------');

  // 3. Futuramente, aqui faremos o processamento real:
  //    - Guardar na base de dados com o Prisma
  //    - Chamar a API de transcrição do YouTube
  //    - Chamar a IA para analisar o texto e gerar o DNA

  // 4. Retornar uma mensagem de sucesso
  return { message: "Dados do DNA recebidos no servidor com sucesso!" };
}
