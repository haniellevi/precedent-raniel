// Caminho do ficheiro: app/dna/dna-form.tsx
'use client';

import { useState, useTransition } from 'react';

// Corrigindo os caminhos de importação para os componentes da UI
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Upload, Youtube, User } from 'lucide-react';
import { processDnaData } from '@/app/actions/dnaActions';

export default function DnaForm() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await processDnaData(formData);

      if (result?.errors) {
        console.error("Erros de validação:", result.errors);
        alert("Ocorreram erros de validação. Verifique a consola.");
      } else {
        console.log("Sucesso:", result?.message);
        alert("Dados do DNA enviados para processamento!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="youtube-link" className="flex items-center gap-2">
          <Youtube className="h-5 w-5" />
          Link de Vídeo do YouTube
        </Label>
        <p className="text-sm text-muted-foreground">
          Cole o URL de um sermão seu no YouTube para analisarmos a sua fala.
        </p>
        <Input
          id="youtube-link"
          name="youtubeLink"
          type="url"
          placeholder="https://www.youtube.com/watch?v=..."
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="personal-description" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Como se vê como pregador?
        </Label>
        <p className="text-sm text-muted-foreground">
          Descreva o seu estilo, tom e os temas que mais gosta de abordar.
        </p>
        <Textarea
          id="personal-description"
          name="personalDescription"
          placeholder="Ex: Sou um pregador expositivo, que busca aplicar a Bíblia de forma prática e encorajadora no dia a dia das pessoas..."
          disabled={isPending}
          rows={5}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file-upload" className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Ficheiro de Referência (Opcional)
        </Label>
        <p className="text-sm text-muted-foreground">
          Envie um ficheiro (.pdf, .docx, .txt) com sermões ou anotações suas.
        </p>
        <Input
          id="file-upload"
          name="fileUpload"
          type="file"
          disabled={isPending}
          accept=".pdf,.doc,.docx,.txt,.odt"
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? 'A processar DNA...' : 'Guardar e Processar DNA'}
      </Button>
    </form>
  );
}