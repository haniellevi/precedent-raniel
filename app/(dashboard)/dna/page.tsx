
import DnaForm from '@/components/dna-form';
import { DnaProfile } from '@/lib/mockApi';

async function getDnaData(): Promise<DnaProfile> {
  try {
    const res = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/api/dna`, { 
      cache: 'no-store' 
    });
    if (!res.ok) {
      throw new Error('Failed to fetch DNA profile');
    }
    return res.json();
  } catch (error) {
    // Return default profile if API fails
    return {
      id: 'default',
      name: 'Perfil Padrão',
      type: 'padrao',
      customAttributes: {
        style: '',
        tone: '',
        vocabulary: []
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}

export default async function DnaPage() {
  const dnaProfile = await getDnaData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Meu DNA de Pregador</h1>
        <p className="text-muted-foreground">
          Defina seu estilo único para que a IA gere sermões com a sua voz.
        </p>
      </div>
      <DnaForm initialProfile={dnaProfile} />
    </div>
  );
}
