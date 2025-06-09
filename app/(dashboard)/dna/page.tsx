// app/(dashboard)/dna/page.tsx
import DnaForm from "@/components/dna-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DnaProfile } from '@/lib/mockApi';

// Função para buscar dados no servidor
async function getDnaData(): Promise<DnaProfile> {
  // A URL deve ser absoluta no servidor
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/dna`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (error) {
    console.error('Erro ao buscar DNA:', error);
    // Retorna dados padrão em caso de erro
    return {
      type: 'padrao',
      name: 'DNA Padrão',
      calculatedPpm: 100
    };
  }
}

export default async function DnaPage() {
  const dnaProfile = await getDnaData();

  // 2. Renderiza a estrutura da página e passa os dados para o Client Component
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Meu DNA de Pregador</h1>
        <p className="text-muted-foreground">
          Defina seu estilo único para que a IA gere sermões com a sua voz.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personalize seu Perfil</CardTitle>
          <CardDescription>
            Forneça materiais de referência para a IA aprender seu estilo de pregação.
            Quanto mais informações, mais personalizado será o sermão.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* O formulário interativo é um Client Component */}
          <DnaForm initialProfile={dnaProfile} />
        </CardContent>
      </Card>
    </div>
  );
}