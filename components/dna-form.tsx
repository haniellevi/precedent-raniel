
'use client';

import { useState } from 'react';
import { DnaProfile } from '@/lib/mockApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UploadCloud, Youtube, Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DnaFormProps {
  initialProfile: DnaProfile;
}

export default function DnaForm({ initialProfile }: DnaFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dnaType, setDnaType] = useState<'padrao' | 'customizado'>(initialProfile.type);
  const [name, setName] = useState(initialProfile.name);
  const [style, setStyle] = useState(initialProfile.customAttributes?.style || '');
  const [tone, setTone] = useState(initialProfile.customAttributes?.tone || '');
  const [vocabulary, setVocabulary] = useState(initialProfile.customAttributes?.vocabulary?.join(', ') || '');
  const [sermonContent, setSermonContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const formData = {
        type: dnaType,
        name,
        customAttributes: dnaType === 'customizado' ? {
          style,
          tone,
          vocabulary: vocabulary.split(',').map(word => word.trim()).filter(word => word.length > 0)
        } : undefined,
        sermonContent,
        videoUrl
      };

      const response = await fetch('/api/dna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar dados');
      }

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error('Erro ao salvar DNA:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuração do DNA de Pregação</CardTitle>
        <CardDescription>
          Configure seu perfil único de pregação para gerar sermões personalizados
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="dna-type">Tipo de DNA</Label>
              <Select value={dnaType} onValueChange={(value: 'padrao' | 'customizado') => setDnaType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de DNA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="padrao">DNA Padrão</SelectItem>
                  <SelectItem value="customizado">DNA Customizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name">Nome do Perfil</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Meu DNA de Pregação"
                required
              />
            </div>

            {dnaType === 'customizado' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="style">Estilo de Pregação</Label>
                  <Input
                    id="style"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    placeholder="Ex: Expositivo e Prático"
                  />
                </div>

                <div>
                  <Label htmlFor="tone">Tom da Pregação</Label>
                  <Input
                    id="tone"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    placeholder="Ex: Inspirador e Encorajador"
                  />
                </div>

                <div>
                  <Label htmlFor="vocabulary">Vocabulário Frequente</Label>
                  <Input
                    id="vocabulary"
                    value={vocabulary}
                    onChange={(e) => setVocabulary(e.target.value)}
                    placeholder="Ex: graça, redenção, propósito (separadas por vírgula)"
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="sermon-content">Conteúdo de Sermão (Opcional)</Label>
              <Textarea
                id="sermon-content"
                value={sermonContent}
                onChange={(e) => setSermonContent(e.target.value)}
                placeholder="Cole aqui o texto de seus sermões para análise..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="video-url">URL de Vídeo (Opcional)</Label>
              <div className="flex space-x-2">
                <Youtube className="h-5 w-5 text-muted-foreground mt-2" />
                <Input
                  id="video-url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Salvo com Sucesso!
              </>
            ) : (
              <>
                <UploadCloud className="mr-2 h-4 w-4" />
                Salvar DNA
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
