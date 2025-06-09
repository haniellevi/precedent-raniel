'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSermon, SermonGenerationRequest } from '@/lib/mockApi';

interface SermonGenerationFormProps {
  onSermonGenerated: (sermon: any) => void;
  userId: string;
}

export default function SermonGenerationForm({ onSermonGenerated, userId }: SermonGenerationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState('');
  const [verseReference, setVerseReference] = useState('');
  const [duration, setDuration] = useState<number>(30);
  const [style, setStyle] = useState('');
  const [tone, setTone] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const request: SermonGenerationRequest = {
        topic,
        verseReference,
        duration,
        style,
        tone
      };

      const sermon = await generateSermon(userId, request);
      onSermonGenerated(sermon);
    } catch (error) {
      console.error('Erro ao gerar sermão:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Gerar Novo Sermão
        </CardTitle>
        <CardDescription>
          Preencha os detalhes abaixo para gerar um sermão personalizado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="topic">Tema do Sermão</Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: O amor de Deus"
              required
            />
          </div>

          <div>
            <Label htmlFor="verse">Referência Bíblica (opcional)</Label>
            <Input
              id="verse"
              value={verseReference}
              onChange={(e) => setVerseReference(e.target.value)}
              placeholder="Ex: João 3:16"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Select value={duration.toString()} onValueChange={(value) => setDuration(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutos</SelectItem>
                  <SelectItem value="30">30 minutos</SelectItem>
                  <SelectItem value="45">45 minutos</SelectItem>
                  <SelectItem value="60">60 minutos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="style-override">Estilo (opcional)</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Usar padrão do DNA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Expositivo">Expositivo</SelectItem>
                  <SelectItem value="Temático">Temático</SelectItem>
                  <SelectItem value="Narrativo">Narrativo</SelectItem>
                  <SelectItem value="Textual">Textual</SelectItem>
                </SelectContent>
              </Select>
            </div>
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