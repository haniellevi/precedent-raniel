// lib/mockApi.ts

/**
 * Interfaces de Dados
 * Define a "forma" dos dados que o nosso frontend irá receber.
 * Espelha o que o Schema Prisma define para o backend.
 */
export interface DnaProfile {
  type: 'padrao' | 'customizado';
  name: string;
  customAttributes?: {
    style: string;
    tone: string;
    vocabulary: string[];
  };
  calculatedPpm: number;
}

/**
 * Dados Mock
 * Nossos dados falsos que simulam o que viria do banco de dados.
 */
const mockDnaProfile: DnaProfile = {
  type: 'customizado',
  name: 'Meu DNA Personalizado',
  customAttributes: {
    style: 'Expositivo e Prático',
    tone: 'Inspirador e Encorajador',
    vocabulary: ['graça', 'redenção', 'propósito', 'comunidade'],
  },
  calculatedPpm: 120,
};

/**
 * Funções do Serviço Mock
 * Simulam chamadas de API assíncronas. O delay simula a latência
 * da rede, o que é ótimo para testar seus estados de carregamento.
 */

export const getDnaProfile = async (): Promise<DnaProfile> => {
  console.log('MOCK API: Buscando perfil de DNA...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('MOCK API: Perfil de DNA retornado.');
      resolve(mockDnaProfile);
    }, 1200); // 1.2 segundos de delay
  });
};

export const updateDnaProfile = async (data: any): Promise<{ success: boolean }> => {
  console.log('MOCK API: Atualizando perfil de DNA com os dados:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('MOCK API: Perfil de DNA atualizado com sucesso.');
      resolve({ success: true });
    }, 1800); // 1.8 segundos de delay para a simulação
  });
};
