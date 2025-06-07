
// Caminho do ficheiro: app/dna/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// O caminho foi corrigido para um import relativo, pois o DnaForm está na mesma pasta.
import DnaForm from "./dna-form";

export default async function DnaPage() {
  const { userId } = auth();
  
  console.log("DnaPage - userId:", userId);
  
  if (!userId) {
    console.log("Utilizador não autenticado, a redirecionar para /sign-in");
    redirect("/sign-in");
  }

  console.log("Utilizador autenticado, a renderizar formulário de DNA");

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-muted/40 p-4 sm:p-6 md:p-10">
      <main className="flex-1 w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Gerir o Meu DNA de Pregador
          </h1>
          <p className="text-muted-foreground mt-1">
            Aqui pode definir o seu estilo único de pregação para que a IA gere sermões com a sua voz.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>O seu DNA Personalizado</CardTitle>
            <CardDescription>
              Forneça as suas referências para que a IA possa aprender o seu estilo.
              Este processo só precisa de ser feito uma vez.
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
