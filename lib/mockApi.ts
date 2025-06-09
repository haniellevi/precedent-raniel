export interface DnaProfile {
  id: string;
  userId: string;
  style: string;
  tone: string;
  sermonContent: string;
  videoUrl?: string;
  customAttributes?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sermon {
  id: string;
  userId: string;
  title: string;
  content: string;
  topic: string;
  style: string;
  tone: string;
  createdAt: Date;
}

export interface SermonGenerationRequest {
  topic: string;
  verseReference?: string;
  duration?: number;
  style?: string;
  tone?: string;
}

// Mock data storage
const mockDnaProfiles: DnaProfile[] = [];
const mockSermons: Sermon[] = [];

export async function getDnaProfile(userId: string): Promise<DnaProfile | null> {
  const profile = mockDnaProfiles.find(p => p.userId === userId);
  if (!profile) {
    // Return default profile
    const defaultProfile: DnaProfile = {
      id: 'default',
      userId,
      style: 'Expositivo',
      tone: 'Inspirador',
      sermonContent: '',
      customAttributes: {
        style: 'Expositivo',
        tone: 'Inspirador'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return defaultProfile;
  }
  return profile;
}

export async function updateDnaProfile(userId: string, data: Partial<DnaProfile>): Promise<DnaProfile> {
  const existingIndex = mockDnaProfiles.findIndex(p => p.userId === userId);

  const updatedProfile: DnaProfile = {
    id: existingIndex >= 0 ? mockDnaProfiles[existingIndex].id : Date.now().toString(),
    userId,
    style: data.style || 'Expositivo',
    tone: data.tone || 'Inspirador',
    sermonContent: data.sermonContent || '',
    videoUrl: data.videoUrl,
    customAttributes: data.customAttributes || {},
    createdAt: existingIndex >= 0 ? mockDnaProfiles[existingIndex].createdAt : new Date(),
    updatedAt: new Date()
  };

  if (existingIndex >= 0) {
    mockDnaProfiles[existingIndex] = updatedProfile;
  } else {
    mockDnaProfiles.push(updatedProfile);
  }

  return updatedProfile;
}

export async function generateSermon(userId: string, request: SermonGenerationRequest): Promise<Sermon> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const newSermon: Sermon = {
    id: Date.now().toString(),
    userId,
    title: `Sermão sobre ${request.topic}`,
    content: `Este é um sermão gerado sobre o tema "${request.topic}". O conteúdo seria desenvolvido aqui com base no DNA do pregador e nas preferências especificadas.`,
    topic: request.topic,
    style: request.style || 'Expositivo',
    tone: request.tone || 'Inspirador',
    createdAt: new Date()
  };

  mockSermons.push(newSermon);
  return newSermon;
}

export async function getSermonHistory(userId: string): Promise<Sermon[]> {
  return mockSermons.filter(s => s.userId === userId).sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}