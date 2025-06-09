Final Answer:
```
```replit_final_file
// Mock functions for API calls

export async function updateDnaProfile(profileData: any) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    data: profileData
  };
}

export async function generateSermon(data: any) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  return {
    id: 'sermon-' + Date.now(),
    title: 'Sermão Gerado: ' + data.theme,
    content: `# ${data.theme}\n\n## Introdução\nEste é um sermão gerado automaticamente sobre ${data.theme}.\n\n## Desenvolvimento\nConteúdo principal do sermão.\n\n## Conclusão\nConclusão inspiradora.`,
    enrichmentSuggestions: '* Adicione uma ilustração\n* Use um testemunho pessoal\n* Inclua uma aplicação prática',
    parameters: data,
    createdAt: new Date().toISOString()
  };
}



// lib/mockApi.ts - ATUALIZADO PARA EXPORTAR APENAS DADOS

// --- Interfaces ---
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
  content: string; 
  enrichmentSuggestions: string; 
  parameters: { 
    theme: string; 
    purpose: string; 
    duration: number; 
  }; 
  createdAt: string; 
}

export interface AdminUser { 
  id: string; 
  name: string; 
  email: string; 
  role: 'free' | 'basic' | 'pro' | 'admin'; 
  isActive: boolean; 
  createdAt: string; 
}

export interface AdminMetrics { 
  totalUsers: number; 
  totalSermons: number; 
  activeSubscriptions: number; 
  dnaUsage: { 
    standard: number; 
    custom: number; 
  }; 
}

export interface AgentPrompt { 
  id: 'dna_agent' | 'sermon_agent'; 
  name: string; 
  description: string; 
  prompt: string; 
  updatedAt: string; 
}

// --- Exportação de Dados Mock ---
export const mockDnaProfileData: DnaProfile = { 
  type: 'customizado', 
  name: 'Meu DNA Personalizado', 
  customAttributes: { 
    style: 'Expositivo e Prático', 
    tone: 'Inspirador e Encorajador', 
    vocabulary: ['graça', 'redenção', 'propósito', 'comunidade'], 
  }, 
  calculatedPpm: 120, 
};

export const mockSermonHistoryData: Sermon[] = [ 
  { 
    id: 'sermon-001', 
    title: 'A Coragem para Recomeçar', 
    content: `# A Coragem para Recomeçar

## Introdução
Todos nós enfrentamos momentos na vida onde precisamos ter a coragem de recomeçar. Seja após uma decepção, uma perda ou simplesmente quando percebemos que estamos no caminho errado.

## Ponto Principal 1: O Poder do Recomeço
- Deus nos oferece sempre uma nova oportunidade
- Cada dia é uma chance de começar de novo

## Ponto Principal 2: Superando o Medo
- O medo é natural, mas não deve nos paralisar
- A fé nos dá força para dar o primeiro passo

## Conclusão
Que possamos ter a coragem de recomeçar sempre que necessário, confiando na graça de Deus.`, 
    enrichmentSuggestions: `* Ilustração: História de Pedro após negar Jesus
* Dinâmica: Momento de reflexão pessoal
* Aplicação prática: Desafio semanal de recomeço`, 
    parameters: { 
      theme: 'Recomeço', 
      purpose: 'Inspirar', 
      duration: 20 
    }, 
    createdAt: '2025-06-05T10:00:00Z', 
  }, 
  { 
    id: 'sermon-002', 
    title: 'Vivendo em Comunidade', 
    content: `# Vivendo em Comunidade

## Introdução
A vida cristã não foi designada para ser vivida em isolamento. Fomos criados para viver em comunidade.

## Ponto Principal 1: O Propósito da Comunidade
- Apoio mútuo nos momentos difíceis
- Celebração conjunta das vitórias

## Ponto Principal 2: Como Construir Comunidade
- Através do amor genuíno
- Praticando a hospitalidade

## Conclusão
Que possamos ser instrumentos de união e amor em nossa comunidade.`, 
    enrichmentSuggestions: `* Dinâmica: Atividade em grupos pequenos
* Ilustração: Exemplo de igreja primitiva em Atos
* Aplicação: Compromisso de conectar-se com alguém novo`, 
    parameters: { 
      theme: 'Comunidade', 
      purpose: 'Ensinar', 
      duration: 30 
    }, 
    createdAt: '2025-05-28T11:30:00Z', 
  }, 
];

export const mockAdminUsersData: AdminUser[] = [ 
  { 
    id: 'user_2iabcde', 
    name: 'Haniel Levi', 
    email: 'haniel.levi@example.com', 
    role: 'admin', 
    isActive: true, 
    createdAt: '2025-04-10T08:00:00Z'
  }, 
  { 
    id: 'user_2ifghij', 
    name: 'Maria Silva', 
    email: 'maria.silva@example.com', 
    role: 'pro', 
    isActive: true, 
    createdAt: '2025-05-20T14:00:00Z'
  }, 
];

export const mockAdminMetricsData: AdminMetrics = { 
  totalUsers: 138, 
  totalSermons: 452, 
  activeSubscriptions: 73, 
  dnaUsage: { 
    standard: 65, 
    custom: 73 
  }, 
};

export const mockAgentPromptsData: AgentPrompt[] = [ 
  { 
    id: 'dna_agent', 
    name: 'Agente Criador de DNA', 
    description: 'Responsável por analisar os materiais do usuário e extrair seu perfil de pregador.', 
    prompt: 'Você é um especialista em análise de estilo e homilética. Analise o texto fornecido e extraia os seguintes atributos em formato JSON: estilo de pregação (expositivo, temático), tom (inspirador, confrontador), e um array de 5 a 10 palavras-chave mais utilizadas.', 
    updatedAt: '2025-06-01T12:00:00Z', 
  }, 
  { 
    id: 'sermon_agent', 
    name: 'Agente Gerador de Sermão', 
    description: 'Responsável por criar o sermão final com base no DNA, RAG e parâmetros do usuário.', 
    prompt: 'Você é um assistente de pregação teologicamente treinado. Seu objetivo é criar um sermão bem estruturado e biblicamente fundamentado. Use o DNA do pregador para definir o tom e estilo. Use os resultados do RAG como base de comentários. Siga a estrutura: Introdução, Pontos Principais (com sub-pontos) e Conclusão. Formate a saída em Markdown.', 
    updatedAt: '2025-06-05T15:30:00Z', 
  } 
];
```

The code adds the missing `updateDnaProfile` function and associated interfaces, replacing the old sermon interface with the new one.
```replit_final_file
// Mock functions for API calls

// lib/mockApi.ts - ATUALIZADO PARA EXPORTAR APENAS DADOS

// --- Interfaces ---

export interface Sermon {
  id: string;
  title: string;
  passage: string;
  content: string;
  outline: string[];
  createdAt: Date;
  userId: string;
}

export interface DnaProfile {
  id: string;
  userId: string;
  preachingStyle: string;
  theologicalBias: string;
  communicationStyle: string;
  targetAudience: string;
  preferredStructure: string;
  updatedAt: Date;
}

// Função para atualizar perfil DNA
export async function updateDnaProfile(data: Partial<DnaProfile>): Promise<DnaProfile> {
  // Simular delay da API
  await new Promise(resolve => setTimeout(resolve, 1000));

  const profile: DnaProfile = {
    id: '1',
    userId: 'user_123',
    preachingStyle: data.preachingStyle || 'expositivo',
    theologicalBias: data.theologicalBias || 'reformado',
    communicationStyle: data.communicationStyle || 'didático',
    targetAudience: data.targetAudience || 'igreja-local',
    preferredStructure: data.preferredStructure || 'três-pontos',
    updatedAt: new Date(),
  };

  return profile;
}

// Função para gerar sermão
export async function generateSermon(formData: any): Promise<Sermon> {
  // Simular delay da API
  await new Promise(resolve => setTimeout(resolve, 2000));

  const sermon: Sermon = {
    id: Math.random().toString(36).substr(2, 9),
    title: `Sermão sobre ${formData.passage}`,
    passage: formData.passage,
    content: `Este é um sermão gerado automaticamente baseado em ${formData.passage}. O conteúdo seria muito mais elaborado em uma implementação real.`,
    outline: [
      'Introdução e contexto',
      'Análise do texto',
      'Aplicação prática',
      'Conclusão e chamada'
    ],
    createdAt: new Date(),
    userId: 'user_123'
  };

  return sermon;
}

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
  content: string; 
  enrichmentSuggestions: string; 
  parameters: { 
    theme: string; 
    purpose: string; 
    duration: number; 
  }; 
  createdAt: string; 
}

export interface AdminUser { 
  id: string; 
  name: string; 
  email: string; 
  role: 'free' | 'basic' | 'pro' | 'admin'; 
  isActive: boolean; 
  createdAt: string; 
}

export interface AdminMetrics { 
  totalUsers: number; 
  totalSermons: number; 
  activeSubscriptions: number; 
  dnaUsage: { 
    standard: number; 
    custom: number; 
  }; 
}

export interface AgentPrompt { 
  id: 'dna_agent' | 'sermon_agent'; 
  name: string; 
  description: string; 
  prompt: string; 
  updatedAt: string; 
}

// --- Exportação de Dados Mock ---
export const mockDnaProfileData: DnaProfile = { 
  type: 'customizado', 
  name: 'Meu DNA Personalizado', 
  customAttributes: { 
    style: 'Expositivo e Prático', 
    tone: 'Inspirador e Encorajador', 
    vocabulary: ['graça', 'redenção', 'propósito', 'comunidade'], 
  }, 
  calculatedPpm: 120, 
};

export const mockSermonHistoryData: Sermon[] = [ 
  { 
    id: 'sermon-001', 
    title: 'A Coragem para Recomeçar', 
    content: `# A Coragem para Recomeçar

## Introdução
Todos nós enfrentamos momentos na vida onde precisamos ter a coragem de recomeçar. Seja após uma decepção, uma perda ou simplesmente quando percebemos que estamos no caminho errado.

## Ponto Principal 1: O Poder do Recomeço
- Deus nos oferece sempre uma nova oportunidade
- Cada dia é uma chance de começar de novo

## Ponto Principal 2: Superando o Medo
- O medo é natural, mas não deve nos paralisar
- A fé nos dá força para dar o primeiro passo

## Conclusão
Que possamos ter a coragem de recomeçar sempre que necessário, confiando na graça de Deus.`, 
    enrichmentSuggestions: `* Ilustração: História de Pedro após negar Jesus
* Dinâmica: Momento de reflexão pessoal
* Aplicação prática: Desafio semanal de recomeço`, 
    parameters: { 
      theme: 'Recomeço', 
      purpose: 'Inspirar', 
      duration: 20 
    }, 
    createdAt: '2025-06-05T10:00:00Z', 
  }, 
  { 
    id: 'sermon-002', 
    title: 'Vivendo em Comunidade', 
    content: `# Vivendo em Comunidade

## Introdução
A vida cristã não foi designada para ser vivida em isolamento. Fomos criados para viver em comunidade.

## Ponto Principal 1: O Propósito da Comunidade
- Apoio mútuo nos momentos difíceis
- Celebração conjunta das vitórias

## Ponto Principal 2: Como Construir Comunidade
- Através do amor genuíno
- Praticando a hospitalidade

## Conclusão
Que possamos ser instrumentos de união e amor em nossa comunidade.`, 
    enrichmentSuggestions: `* Dinâmica: Atividade em grupos pequenos
* Ilustração: Exemplo de igreja primitiva em Atos
* Aplicação: Compromisso de conectar-se com alguém novo`, 
    parameters: { 
      theme: 'Comunidade', 
      purpose: 'Ensinar', 
      duration: 30 
    }, 
    createdAt: '2025-05-28T11:30:00Z', 
  }, 
];

export const mockAdminUsersData: AdminUser[] = [ 
  { 
    id: 'user_2iabcde', 
    name: 'Haniel Levi', 
    email: 'haniel.levi@example.com', 
    role: 'admin', 
    isActive: true, 
    createdAt: '2025-04-10T08:00:00Z'
  }, 
  { 
    id: 'user_2ifghij', 
    name: 'Maria Silva', 
    email: 'maria.silva@example.com', 
    role: 'pro', 
    isActive: true, 
    createdAt: '2025-05-20T14:00:00Z'
  }, 
];

export const mockAdminMetricsData: AdminMetrics = { 
  totalUsers: 138, 
  totalSermons: 452, 
  activeSubscriptions: 73, 
  dnaUsage: { 
    standard: 65, 
    custom: 73 
  }, 
};

export const mockAgentPromptsData: AgentPrompt[] = [ 
  { 
    id: 'dna_agent', 
    name: 'Agente Criador de DNA', 
    description: 'Responsável por analisar os materiais do usuário e extrair seu perfil de pregador.', 
    prompt: 'Você é um especialista em análise de estilo e homilética. Analise o texto fornecido e extraia os seguintes atributos em formato JSON: estilo de pregação (expositivo, temático), tom (inspirador, confrontador), e um array de 5 a 10 palavras-chave mais utilizadas.', 
    updatedAt: '2025-06-01T12:00:00Z', 
  }, 
  { 
    id: 'sermon_agent', 
    name: 'Agente Gerador de Sermão', 
    description: 'Responsável por criar o sermão final com base no DNA, RAG e parâmetros do usuário.', 
    prompt: 'Você é um assistente de pregação teologicamente treinado. Seu objetivo é criar um sermão bem estruturado e biblicamente fundamentado. Use o DNA do pregador para definir o tom e estilo. Use os resultados do RAG como base de comentários. Siga a estrutura: Introdução, Pontos Principais (com sub-pontos) e Conclusão. Formate a saída em Markdown.', 
    updatedAt: '2025-06-05T15:30:00Z', 
  } 
];
```// Mock functions for API calls

// lib/mockApi.ts - ATUALIZADO PARA EXPORTAR APENAS DADOS

// --- Interfaces ---

export interface Sermon {
  id: string;
  title: string;
  passage: string;
  content: string;
  outline: string[];
  createdAt: Date;
  userId: string;
}

export interface DnaProfile {
  id: string;
  userId: string;
  preachingStyle: string;
  theologicalBias: string;
  communicationStyle: string;
  targetAudience: string;
  preferredStructure: string;
  updatedAt: Date;
}

// Função para atualizar perfil DNA
export async function updateDnaProfile(data: Partial<DnaProfile>): Promise<DnaProfile> {
  // Simular delay da API
  await new Promise(resolve => setTimeout(resolve, 1000));

  const profile: DnaProfile = {
    id: '1',
    userId: 'user_123',
    preachingStyle: data.preachingStyle || 'expositivo',
    theologicalBias: data.theologicalBias || 'reformado',
    communicationStyle: data.communicationStyle || 'didático',
    targetAudience: data.targetAudience || 'igreja-local',
    preferredStructure: data.preferredStructure || 'três-pontos',
    updatedAt: new Date(),
  };

  return profile;
}

// Função para gerar sermão
export async function generateSermon(formData: any): Promise<Sermon> {
  // Simular delay da API
  await new Promise(resolve => setTimeout(resolve, 2000));

  const sermon: Sermon = {
    id: Math.random().toString(36).substr(2, 9),
    title: `Sermão sobre ${formData.passage}`,
    passage: formData.passage,
    content: `Este é um sermão gerado automaticamente baseado em ${formData.passage}. O conteúdo seria muito mais elaborado em uma implementação real.`,
    outline: [
      'Introdução e contexto',
      'Análise do texto',
      'Aplicação prática',
      'Conclusão e chamada'
    ],
    createdAt: new Date(),
    userId: 'user_123'
  };

  return sermon;
}

export const mockDnaProfileData: DnaProfile = { 
  type: 'padrao' | 'customizado', 
  name: 'Meu DNA Personalizado', 
  customAttributes: { 
    style: 'Expositivo e Prático', 
    tone: 'Inspirador e Encorajador', 
    vocabulary: ['graça', 'redenção', 'propósito', 'comunidade'], 
  }, 
  calculatedPpm: 120, 
};

export const mockSermonHistoryData: Sermon[] = [ 
  { 
    id: 'sermon-001', 
    title: 'A Coragem para Recomeçar', 
    content: `# A Coragem para Recomeçar

## Introdução
Todos nós enfrentamos momentos na vida onde precisamos ter a coragem de recomeçar. Seja após uma decepção, uma perda ou simplesmente quando percebemos que estamos no caminho errado.

## Ponto Principal 1: O Poder do Recomeço
- Deus nos oferece sempre uma nova oportunidade
- Cada dia é uma chance de começar de novo

## Ponto Principal 2: Superando o Medo
- O medo é natural, mas não deve nos paralisar
- A fé nos dá força para dar o primeiro passo

## Conclusão
Que possamos ter a coragem de recomeçar sempre que necessário, confiando na graça de Deus.`, 
    enrichmentSuggestions: `* Ilustração: História de Pedro após negar Jesus
* Dinâmica: Momento de reflexão pessoal
* Aplicação prática: Desafio semanal de recomeço`, 
    parameters: { 
      theme: 'Recomeço', 
      purpose: 'Inspirar', 
      duration: 20 
    }, 
    createdAt: '2025-06-05T10:00:00Z', 
  }, 
  { 
    id: 'sermon-002', 
    title: 'Vivendo em Comunidade', 
    content: `# Vivendo em Comunidade

## Introdução
A vida cristã não foi designada para ser vivida em isolamento. Fomos criados para viver em comunidade.

## Ponto Principal 1: O Propósito da Comunidade
- Apoio mútuo nos momentos difíceis
- Celebração conjunta das vitórias

## Ponto Principal 2: Como Construir Comunidade
- Através do amor genuíno
- Praticando a hospitalidade

## Conclusão
Que possamos ser instrumentos de união e amor em nossa comunidade.`, 
    enrichmentSuggestions: `* Dinâmica: Atividade em grupos pequenos
* Ilustração: Exemplo de igreja primitiva em Atos
* Aplicação: Compromisso de conectar-se com alguém novo`, 
    parameters: { 
      theme: 'Comunidade', 
      purpose: 'Ensinar', 
      duration: 30 
    }, 
    createdAt: '2025-05-28T11:30:00Z', 
  }, 
];

export const mockAdminUsersData: AdminUser[] = [ 
  { 
    id: 'user_2iabcde', 
    name: 'Haniel Levi', 
    email: 'haniel.levi@example.com', 
    role: 'admin', 
    isActive: true, 
    createdAt: '2025-04-10T08:00:00Z'
  }, 
  { 
    id: 'user_2ifghij', 
    name: 'Maria Silva', 
    email: 'maria.silva@example.com', 
    role: 'pro', 
    isActive: true, 
    createdAt: '2025-05-20T14:00:00Z'
  }, 
];

export const mockAdminMetricsData: AdminMetrics = { 
  totalUsers: 138, 
  totalSermons: 452, 
  activeSubscriptions: 73, 
  dnaUsage: { 
    standard: 65, 
    custom: 73 
  }, 
};

export const mockAgentPromptsData: AgentPrompt[] = [ 
  { 
    id: 'dna_agent', 
    name: 'Agente Criador de DNA', 
    description: 'Responsável por analisar os materiais do usuário e extrair seu perfil de pregador.', 
    prompt: 'Você é um especialista em análise de estilo e homilética. Analise o texto fornecido e extraia os seguintes atributos em formato JSON: estilo de pregação (expositivo, temático), tom (inspirador, confrontador), e um array de 5 a 10 palavras-chave mais utilizadas.', 
    updatedAt: '2025-06-01T12:00:00Z', 
  }, 
  { 
    id: 'sermon_agent', 
    name: 'Agente Gerador de Sermão', 
    description: 'Responsável por criar o sermão final com base no DNA, RAG e parâmetros do usuário.', 
    prompt: 'Você é um assistente de pregação teologicamente treinado. Seu objetivo é criar um sermão bem estruturado e biblicamente fundamentado. Use o DNA do pregador para definir o tom e estilo. Use os resultados do RAG como base de comentários. Siga a estrutura: Introdução, Pontos Principais (com sub-pontos) e Conclusão. Formate a saída em Markdown.', 
    updatedAt: '2025-06-05T15:30:00Z', 
  } 
];This code integrates new interfaces and mock API functions while retaining the original structure and mock data.