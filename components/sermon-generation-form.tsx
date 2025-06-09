'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Zap } from 'lucide-react';
import { Sermon } from '@/lib/mockApi';

interface SermonGenerationFormProps {
  onSermonGenerated: (sermon: Sermon) => void;
}

export default function SermonGenerationForm({ onSermonGenerated }: SermonGenerationFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const params = Object.fromEntries(formData.entries());

      const response = await fetch('/api/sermons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error('Erro ao gerar sermão');
      }

      const sermon = await response.json();
      onSermonGenerated(sermon);
    } catch (error) {
      console.error('Erro ao gerar sermão:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerador de Sermão</CardTitle>
        <CardDescription>
          Insira os parâmetros desejados para gerar um sermão personalizado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="theme">Tema Principal</Label>
              <Input
                id="theme"
                name="theme"
                placeholder="Ex: Esperança, Fé, Amor"
                required
              />
            </div>

            <div>
              <Label htmlFor="purpose">Propósito</Label>
              <Select name="purpose" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o propósito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inspirar">Inspirar</SelectItem>
                  <SelectItem value="ensinar">Ensinar</SelectItem>
                  <SelectItem value="confrontar">Confrontar</SelectItem>
                  <SelectItem value="consolar">Consolar</SelectItem>
                  <SelectItem value="motivar">Motivar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Select name="duration" required>
                <SelectTrigger>
                  <SelectValue placeholder="Duração do sermão" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutos</SelectItem>
                  <SelectItem value="20">20 minutos</SelectItem>
                  <SelectItem value="30">30 minutos</SelectItem>
                  <SelectItem value="45">45 minutos</SelectItem>
                  <SelectItem value="60">60 minutos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="audience">Audiência</Label>
              <Select name="audience">
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de audiência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="geral">Congregação Geral</SelectItem>
                  <SelectItem value="jovens">Jovens</SelectItem>
                  <SelectItem value="adultos">Adultos</SelectItem>
                  <SelectItem value="criancas">Crianças</SelectItem>
                  <SelectItem value="casais">Casais</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="scripture">Texto Bíblico Base (Opcional)</Label>
            <Input
              id="scripture"
              name="scripture"
              placeholder="Ex: João 3:16, Salmos 23, Romanos 8:28"
            />
          </div>

          <div>
            <Label htmlFor="context">Contexto Especial (Opcional)</Label>
            <Textarea
              id="context"
              name="context"
              placeholder="Descreva algum contexto especial para este sermão..."
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gerando Sermão...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-4 w-4" />
                Gerar Sermão
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}