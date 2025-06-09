'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Loader2 } from 'lucide-react';
import { Sermon, generateSermon } from '@/lib/mockApi';

interface SermonGenerationFormProps {
  onSermonGenerated: (sermon: Sermon) => void;
}

export default function SermonGenerationForm({ onSermonGenerated }: SermonGenerationFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const params = Object.fromEntries(formData.entries());

    try {
      const sermon = await generateSermon(params);
      onSermonGenerated(sermon);
    } catch (error) {
      console.error('Erro ao gerar sermão:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Gerar Novo Sermão</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar um sermão personalizado com base no seu DNA.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="theme">Tema Central</Label>
            <Input id="theme" name="theme" placeholder="Ex: A Graça de Deus" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Propósito Principal</Label>
            <Select name="purpose" defaultValue="Inspirar">
              <SelectTrigger>
                <SelectValue placeholder="Selecione um propósito" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Inspirar">Inspirar</SelectItem>
                <SelectItem value="Ensinar">Ensinar</SelectItem>
                <SelectItem value="Confrontar">Confrontar</SelectItem>
                <SelectItem value="Consolar">Consolar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="audience">Público-Alvo</Label>
            <Input id="audience" name="audience" placeholder="Ex: Jovens, Famílias, Igreja em geral" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Duração Aproximada (min)</Label>
            <Input id="duration" name="duration" type="number" defaultValue={25} />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="custom-prompt">Seu Próprio Prompt / Texto Base</Label>
            <Textarea
              id="custom-prompt"
              name="custom-prompt"
              placeholder="Opcional: Insira aqui um esboço, um versículo chave ou um resumo que você queira usar como base..."
              rows={4}
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando com IA...
                </>
              ) : (
                'Gerar Sermão'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}