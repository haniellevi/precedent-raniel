
'use server';

import { z } from 'zod';

// Schema de validação usando Zod
const dnaSchema = z.object({
  youtubeLink: z.string().url("Por favor insira um URL válido").optional().or(z.literal("")),
  personalDescription: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  fileUpload: z.any().optional(), // Para ficheiros, validação mais complexa seria necessária
});

export async function processDnaData(formData: FormData) {
  try {
    // Extrai os dados do FormData
    const data = {
      youtubeLink: formData.get('youtubeLink') as string,
      personalDescription: formData.get('personalDescription') as string,
      fileUpload: formData.get('fileUpload') as File,
    };

    // Valida os dados usando o schema
    const validatedData = dnaSchema.parse(data);

    // Aqui você pode processar os dados validados
    console.log('Dados validados:', validatedData);

    // Simula processamento no servidor
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Retorna sucesso
    return {
      success: true,
      message: "DNA do pregador processado com sucesso!",
    };

  } catch (error) {
    console.error('Erro ao processar dados do DNA:', error);

    if (error instanceof z.ZodError) {
      // Retorna erros de validação
      return {
        success: false,
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }

    // Retorna erro genérico
    return {
      success: false,
      message: "Erro interno do servidor",
    };
  }
}
