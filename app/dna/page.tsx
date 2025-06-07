// app/dna/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Componentes da UI - Estes componentes vêm do template Precedent (shadcn/ui)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/components/ui/card";
import DnaForm from "./dna-form";

// Esta página é um Server Component, o que é ótimo para performance.
// Ela será renderizada no servidor.
export default async function DnaPage() {
  // 1. Proteger a Rota
  // A função auth() do Clerk obtém os dados do usuário logado.
  // Se não houver { userId }, significa que o usuário não está logado.
  // Nosso middleware já deve redirecionar, mas esta é uma segurança extra.
  const { userId } = auth();
  if (!userId) {
    // A função redirect do Next.js envia o usuário para a página de login.
    redirect("/sign-in");
  }

  // Futuramente, aqui faremos uma busca no banco de dados para
  // pegar o perfil de DNA existente deste usuário.
  // Ex: const dnaProfile = await getDnaProfileFromDb(userId);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-muted/40 p-4 sm:p-6 md:p-10">
      <main className="flex-1 w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Gerenciar Meu DNA de Pregador
          </h1>
          <p className="text-muted-foreground mt-1">
            Aqui você pode definir seu estilo único de pregação para que a IA gere sermões com a sua voz.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Seu DNA Customizado</CardTitle>
            <CardDescription>
              Forneça suas referências para que a IA possa aprender seu estilo.
              Este processo só precisa ser feito uma vez.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DnaForm />
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
