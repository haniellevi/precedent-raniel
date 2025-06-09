
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          SermonAI
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Crie sermões personalizados com inteligência artificial que aprende seu estilo único de pregação.
        </p>
      </div>

      <SignedOut>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/sign-up">Começar Agora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/sign-in">Fazer Login</Link>
            </Button>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Gerar Sermão</CardTitle>
              <CardDescription>
                Crie um novo sermão com base no seu DNA de pregação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/gerar">Criar Sermão</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meu DNA</CardTitle>
              <CardDescription>
                Configure seu estilo e personalidade de pregação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dna">Configurar DNA</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico</CardTitle>
              <CardDescription>
                Veja todos os sermões que você já gerou
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/historico">Ver Histórico</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SignedIn>
    </div>
  );
}
