import DnaForm from '@/components/dna-form';
import { DnaProfile } from '@/lib/mockApi';

async function getDnaData(): Promise<DnaProfile> {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/dna`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch DNA profile');
  return res.json();
}

export default async function DnaPage() {
  const dnaProfile = await getDnaData();

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Meu DNA de Pregador</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Esta é a sua central de personalização. Configure os atributos abaixo para que a inteligência artificial aprenda a sua voz e estilo únicos.
        </p>
      </div>
      <div className="pt-4">
        <DnaForm initialProfile={dnaProfile} />
      </div>
    </div>
  );
}