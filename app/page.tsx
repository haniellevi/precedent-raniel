import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, FileText, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Crie Sermões com{" "}
            <span className="text-blue-600">Inteligência Artificial</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforme a sua pregação com IA personalizada. Defina o seu DNA de pregador 
            e gere sermões únicos que refletem o seu estilo e teologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/dna">Começar Agora</Link>
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <Mic className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>DNA Personalizado</CardTitle>
              <CardDescription>
                Configure o seu perfil de pregação único com base no seu estilo e teologia.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Geração Inteligente</CardTitle>
              <CardDescription>
                IA avançada que gera sermões alinhados com a sua voz e mensagem.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Resultados Rápidos</CardTitle>
              <CardDescription>
                Sermões completos em minutos, prontos para impactar vidas.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Transformar a Sua Pregação?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a centenas de pregadores que já estão usando IA para criar sermões impactantes.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/sign-up">Comece Gratuitamente</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}