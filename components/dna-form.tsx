// components/dna-form.tsx
'use client';

import { useState } from 'react';
import { DnaProfile, updateDnaProfile } from '@/lib/mockApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { UploadCloud, Youtube, Loader2, CheckCircle } from 'lucide-react';

interface DnaFormProps {
  initialProfile: DnaProfile;
}

export default function DnaForm({ initialProfile }: DnaFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [personalDescription, setPersonalDescription] = useState(
    initialProfile.customAttributes?.style || ''
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    const formData = {
      youtubeLink,
      personalDescription,
      // Em uma aplicação real, você lidaria com o upload do arquivo aqui
    };

    await updateDnaProfile(formData);

    setIsLoading(false);
    setIsSuccess(true);

    // Esconde a mensagem de sucesso após alguns segundos
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
      {/* Seção de Upload de Arquivo */}
      <div className="space-y-2">
        <Label htmlFor="sermon-file" className="text-base font-semibold">
          Transcrições de Sermões
        </Label>
        <p className="text-sm text-muted-foreground">
          Envie um arquivo (.pdf, .docx, .txt) com seus sermões anteriores.
        </p>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="sermon-file-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/80"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Clique para enviar</span> ou arraste e solte
              </p>
            </div>
            <input id="sermon-file-upload" type="file" className="hidden" />
          </label>
        </div>
      </div>

      {/* Seção de Link do YouTube */}
      <div className="space-y-2">
        <Label htmlFor="youtube-link" className="text-base font-semibold">Link do YouTube</Label>
        <p className="text-sm text-muted-foreground">
          Cole um link de uma pregação sua no YouTube para análise de vídeo e áudio.
        </p>
        <div className="relative">
          <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="youtube-link"
            placeholder="https://www.youtube.com/watch?v=..."
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Seção de Descrição Pessoal */}
      <div className="space-y-2">
        <Label htmlFor="personal-description" className="text-base font-semibold">
          Sua Voz como Pregador
        </Label>
        <p className="text-sm text-muted-foreground">
          Descreva em poucas palavras suas características, seu estilo e o que você mais valoriza em uma mensagem.
        </p>
        <Textarea
          id="personal-description"
          placeholder="Ex: Sou um pregador que busca ser prático e inspirador, usando ilustrações do dia a dia para conectar a Bíblia com a vida das pessoas..."
          value={personalDescription}
          onChange={(e) => setPersonalDescription(e.target.value)}
          rows={5}
        />
      </div>

      {/* Botão de Submissão */}
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analisando...
            </>
          ) : (
            'Analisar e Salvar DNA'
          )}
        </Button>
        {isSuccess && (
          <div className="flex items-center text-green-600">
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>DNA atualizado com sucesso!</span>
          </div>
        )}
      </div>
    </form>
    </div>
  );
}

