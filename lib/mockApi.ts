
// lib/mockApi.ts

// --- Interfaces de Dados ---
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

export interface Sermon {
  id: string;
  title: string;
  content: string; // Conteúdo em Markdown
  enrichmentSuggestions: string;
  parameters: {
    theme: string;
    purpose: string;
    duration: number;
  };
  createdAt: string;
}

// --- Dados Mock ---
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

const generatedSermonMock: Sermon = {
    id: 'sermon-gen-001',
    title: 'A Coragem para Recomeçar',
    content: `
# A Coragem para Recomeçar

## Introdução
Todos nós, em algum momento, enfrentamos a necessidade de recomeçar. Seja após um erro, uma perda ou simplesmente uma mudança de estação na vida. A Bíblia está repleta de histórias sobre novos começos, e hoje vamos explorar como encontrar a coragem necessária para dar o primeiro passo.

## Ponto 1: A Redenção de Pedro
Lembre-se de Pedro. Após negar a Jesus três vezes, ele se sentiu um fracasso total. Ele voltou a pescar, talvez pensando que seu tempo como discípulo havia acabado. Mas na praia, Jesus o encontrou e, em vez de repreendê-lo, ofereceu-lhe café da manhã e lhe deu uma nova missão: "Apascenta as minhas ovelhas". 

Isso nos ensina uma verdade poderosa: **nosso passado não define nosso futuro aos olhos de Deus**. A restauração está sempre disponível.

* Negação → Medo e Vergonha
* Restauração → Coragem e Propósito

## Ponto 2: A Oportunidade na Adversidade
Considere José. Vendido como escravo por seus irmãos, falsamente acusado e jogado na prisão. Cada passo parecia um beco sem saída. No entanto, cada adversidade foi, na verdade, um degrau que o preparou para o palácio. Ele mesmo disse a seus irmãos: "Vocês planejaram o mal contra mim, mas Deus o tornou em bem".

## Conclusão
Que possamos ter a coragem de aceitar a graça de Deus para recomeçar, assim como Pedro, e a sabedoria para ver a mão de Deus trabalhando em nossas adversidades, assim como José. O novo começo que você tanto anseia pode estar a uma oração de distância. Amém.
    `,
    enrichmentSuggestions: `
* **Ilustração:** Use a metáfora de uma árvore podada que, na primavera seguinte, cresce mais forte e com mais frutos.
* **Pergunta para Reflexão:** Peça para a congregação pensar silenciosamente: "Qual área da minha vida eu sinto que é tarde demais para recomeçar? O que me impede de entregar isso a Deus?".
* **Dinâmica:** Incentive as pessoas a escreverem em um pequeno pedaço de papel uma área de fracasso e, simbolicamente, deixá-lo no altar ao final do culto.
    `,
    parameters: {
      theme: 'Recomeço',
      purpose: 'Inspirar',
      duration: 20,
    },
    createdAt: new Date().toISOString(),
};


// --- Funções do Serviço Mock ---

export const getDnaProfile = async (): Promise<DnaProfile> => {
  console.log('MOCK API: Buscando perfil de DNA...');
  return new Promise((resolve) => setTimeout(() => resolve(mockDnaProfile), 1000));
};

export const updateDnaProfile = async (data: any): Promise<{ success: boolean }> => {
  console.log('MOCK API: Atualizando perfil de DNA com os dados:', data);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1500));
};

export const generateSermon = async (params: any): Promise<Sermon> => {
  console.log('MOCK API: Gerando sermão com parâmetros:', params);
  return new Promise((resolve) => setTimeout(() => resolve(generatedSermonMock), 3000));
};
