
// app/(dashboard)/dna/page.tsx
import { getDnaProfile } from '@/lib/mockApi';
import DnaForm from '@/components/dna-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Esta é uma página assíncrona (Server Component)
export default async function DnaPage() {
  // 1. Busca os dados no servidor usando nosso serviço de mock
  const dnaProfile = await getDnaProfile();

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
