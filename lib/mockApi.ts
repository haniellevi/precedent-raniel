// lib/mockApi.ts

// --- Interfaces de Dados ---
export interface DnaProfile {
  type: 'padrão' | 'customizado';
  name: string;
  customAttributes?: {
    style?: string;
    tone?: string;
    vocabulary?: string[];
  };
  calculatedPpm?: number;
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
    content: `# A Coragem para Recomeçar

## Introdução
Todos nós enfrentamos momentos em que precisamos recomeçar. Seja após uma queda, um fracasso ou simplesmente uma mudança de direção na vida.

## Desenvolvimento
1. **O poder do recomeço está em Deus**
2. **Não olhe para trás com arrependimento**
3. **Confie no plano divino para sua vida**

## Conclusão
Deus sempre nos dá uma nova oportunidade. O importante é ter coragem para dar o primeiro passo.`,
    enrichmentSuggestions: `* Ilustração: Use a metáfora de uma árvore podada que cresce mais forte
* Dinâmica: Peça para as pessoas escreverem algo que querem recomeçar
* Versículo chave: Lamentações 3:22-23`,
    parameters: { theme: 'Recomeço', purpose: 'Inspirar', duration: 20 },
    createdAt: '2025-01-06T10:00:00Z',
  },
  {
    id: 'sermon-002',
    title: 'Vivendo em Comunidade',
    content: `# Vivendo em Comunidade

## Introdução
Deus não nos criou para viver isolados. A comunidade é essencial para nosso crescimento espiritual.

## Desenvolvimento
1. **A importância do amor fraternal**
2. **Como resolver conflitos com amor**
3. **Edificando uns aos outros**

## Conclusão
Quando vivemos em verdadeira comunidade, refletimos o coração de Deus.`,
    enrichmentSuggestions: `* Dinâmica: Peça para as pessoas se cumprimentarem e orarem umas pelas outras
* Ilustração: Use o exemplo de uma fogueira - as brasas juntas mantêm o fogo aceso
* Versículo chave: Hebreus 10:24-25`,
    parameters: { theme: 'Comunidade', purpose: 'Ensinar', duration: 30 },
    createdAt: '2025-01-05T11:30:00Z',
  },
  {
    id: 'sermon-003',
    title: 'O Propósito na Espera',
    content: `# O Propósito na Espera

## Introdução
A espera pode ser um dos momentos mais difíceis da vida cristã. Mas Deus tem um propósito em cada período de espera.

## Desenvolvimento
1. **Deus trabalha durante nossa espera**
2. **A espera desenvolve nosso caráter**
3. **Confiar no tempo de Deus**

## Conclusão
Na espera, aprendemos a depender completamente de Deus e descobrimos Sua fidelidade.`,
    enrichmentSuggestions: `* Versículo Chave: Isaías 40:31
* Ilustração: Use o exemplo de uma borboleta no casulo
* Oração: Ore pelos que estão em período de espera`,
    parameters: { theme: 'Paciência', purpose: 'Consolar', duration: 25 },
    createdAt: '2025-01-04T09:45:00Z',
  },
];

const mockAdminUsers: AdminUser[] = [
  {
    id: 'admin-001',
    name: 'Admin Teste',
    email: 'admin@teste.com',
    role: 'admin',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'user-001',
    name: 'User Free',
    email: 'free@teste.com',
    role: 'free',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'user-002',
    name: 'User Basic',
    email: 'basic@teste.com',
    role: 'basic',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'user-003',
    name: 'User Pro',
    email: 'pro@teste.com',
    role: 'pro',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
];

const mockAdminMetrics: AdminMetrics = {
  totalUsers: 150,
  totalSermons: 520,
  activeSubscriptions: 85,
  dnaUsage: {
    standard: 60,
    custom: 40,
  },
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
  // Retorna o primeiro item do histórico como se tivesse sido gerado agora
  const newSermon = { ...mockSermonHistory[0], id: `gen-${Date.now()}`, createdAt: new Date().toISOString() };
  return new Promise((resolve) => setTimeout(() => resolve(newSermon), 3000));
};

export const getSermonHistory = async (): Promise<Sermon[]> => {
  console.log('MOCK API: Buscando histórico de sermões...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSermonHistory);
    }, 600);
  });
};

// NOVAS FUNÇÕES ADMIN
export const getAdminMetrics = async (): Promise<AdminMetrics> => {
  console.log('MOCK API: Buscando métricas admin...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAdminMetrics);
    }, 700);
  });
};

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  console.log('MOCK API: Buscando usuários admin...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAdminUsers);
    }, 900);
  });
};