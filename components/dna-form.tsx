
'use client';

import { useState } from 'react';
import { DnaProfile } from '@/lib/mockApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DnaFormProps {
  initialProfile: DnaProfile;
}

export default function DnaForm({ initialProfile }: DnaFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [style, setStyle] = useState(initialProfile.customAttributes?.style || initialProfile.style);
  const [tone, setTone] = useState(initialProfile.customAttributes?.tone || initialProfile.tone);
  const [sermonContent, setSermonContent] = useState(initialProfile.sermonContent);
  const [videoUrl, setVideoUrl] = useState(initialProfile.videoUrl || '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/dna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          style,
          tone,
          sermonContent,
          videoUrl,
          customAttributes: { style, tone }
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      }
    } catch (error) {
      console.error('Erro ao salvar DNA:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Configuração do DNA de Pregação</CardTitle>
        <CardDescription>
          Forneça referências para a IA aprender seu estilo e gerar sermões com a sua voz.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="style">Estilo de Pregação</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style">
                  <SelectValue placeholder="Selecione um estilo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Expositivo">Expositivo</SelectItem>
                  <SelectItem value="Temático">Temático</SelectItem>
                  <SelectItem value="Narrativo">Narrativo</SelectItem>
                  <SelectItem value="Textual">Textual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="tone">Tom da Pregação</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone">
                  <SelectValue placeholder="Selecione um tom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Inspirador">Inspirador</SelectItem>
                  <SelectItem value="Encorajador">Encorajador</SelectItem>
                  <SelectItem value="Confrontador">Confrontador</SelectItem>
                  <SelectItem value="Consolador">Consolador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="sermon-content">Fonte de Dados 1: Texto de Sermões</Label>
            <Textarea 
              id="sermon-content" 
              value={sermonContent}
              onChange={(e) => setSermonContent(e.target.value)}
              placeholder="Cole aqui o texto de um ou mais sermões para análise..." 
              rows={8} 
            />
          </div>
          <div>
            <Label htmlFor="video-url">Fonte de Dados 2: URL de Vídeo do YouTube</Label>
            <Input 
              id="video-url" 
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..." 
            />
          </div>

          <div className="flex justify-end items-center gap-4 pt-4">
            {isSuccess && (
              <span className="text-sm text-green-600 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4" />
                Salvo!
              </span>
            )}
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analisar e Salvar DNA
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
