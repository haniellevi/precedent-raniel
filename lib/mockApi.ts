// lib/mockApi.ts

// --- Interfaces de Dados ---
export interface DnaProfile {
  type: 'customizado';
  name: string;
  customAttributes: {
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
  role: string;
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

// NOVA INTERFACE
export interface AgentPrompt {
  id: 'dna_agent' | 'sermon_agent';
  name: string;
  description: string;
  prompt: string;
  updatedAt: string;
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

const mockSermonHistory: Sermon[] = [
  {
    id: 'sermon-001',
    title: 'A Coragem para Recomeçar',
    content: `# A Coragem para Recomeçar\n\nTexto bíblico aqui...`,
    enrichmentSuggestions: `* Ilustração sobre recomeços\n* Testemunho pessoal`,
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
    content: `# Vivendo em Comunidade\n\nTexto bíblico aqui...`,
    enrichmentSuggestions: `* Dinâmica de grupo\n* Exemplo prático`,
    parameters: {
      theme: 'Comunidade',
      purpose: 'Ensinar',
      duration: 30
    },
    createdAt: '2025-05-28T11:30:00Z',
  },
];

const mockAdminUsers: AdminUser[] = [
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

const mockAdminMetrics: AdminMetrics = {
  totalUsers: 138,
  totalSermons: 452,
  activeSubscriptions: 73,
  dnaUsage: {
    standard: 65,
    custom: 73
  },
};

// NOVOS DADOS
const mockAgentPrompts: AgentPrompt[] = [
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

// --- Funções do Serviço Mock ---
export const getDnaProfile = async (): Promise<DnaProfile> => 
  new Promise((resolve) => setTimeout(() => resolve(mockDnaProfile), 500));

export const updateDnaProfile = async (data: any): Promise<{ success: boolean }> => 
  new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));

export const generateSermon = async (params: any): Promise<Sermon> => {
  const newSermon = {
    ...mockSermonHistory[0],
    id: `gen-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  return new Promise((resolve) => setTimeout(() => resolve(newSermon), 2000));
};

export const getSermonHistory = async (): Promise<Sermon[]> => 
  new Promise((resolve) => setTimeout(() => resolve(mockSermonHistory), 600));

export const getAdminMetrics = async (): Promise<AdminMetrics> => 
  new Promise((resolve) => setTimeout(() => resolve(mockAdminMetrics), 700));

export const getAdminUsers = async (): Promise<AdminUser[]> => 
  new Promise((resolve) => setTimeout(() => resolve(mockAdminUsers), 900));

// NOVAS FUNÇÕES ADMIN
export const getAgentPrompts = async (): Promise<AgentPrompt[]> => 
  new Promise((resolve) => setTimeout(() => resolve(mockAgentPrompts), 500));

export const updateAgentPrompt = async (id: string, prompt: string): Promise<{ success: boolean }> => {
  console.log(`MOCK API: Atualizando prompt ${id} com: ${prompt}`);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1200));
};