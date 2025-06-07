import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/components/ui/card";
import DnaForm from "@/components/dna-form";

export default async function DnaPage() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

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