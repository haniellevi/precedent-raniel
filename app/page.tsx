import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Mic, FileText, Zap } from "lucide-react";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Em três passos simples, personalize a IA para criar sermões que soam como você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>1. Defina o seu DNA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Forneça exemplos da sua pregação através de vídeos, textos ou 
                descrições do seu estilo único.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>2. IA Aprende</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A nossa IA analisa o seu conteúdo e aprende os padrões únicos 
                da sua pregação e teologia.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>3. Gere Sermões</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receba sermões personalizados que mantêm a sua voz, estilo e 
                abordagem teológica únicos.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Configure o seu DNA de pregador em poucos minutos e comece a criar 
            sermões personalizados hoje mesmo.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/dna">Configurar o Meu DNA</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}