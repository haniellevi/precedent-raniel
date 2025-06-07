'use client';

import { useState, useTransition } from 'react';
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
        alert("Ocorreram erros de validação. Verifique a consola.");
      } else {
        alert("Dados do DNA enviados para processamento!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
      <div className="space-y-2">
        <Label htmlFor="youtube-link" className="flex items-center gap-2">
          <Youtube className="h-5 w-5" />
          Link de Vídeo do YouTube
        </Label>
        <Input id="youtube-link" name="youtubeLink" type="url" placeholder="https://www.youtube.com/watch?v=..." disabled={isPending} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="personal-description" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Como se vê como pregador?
        </Label>
        <Textarea id="personal-description" name="personalDescription" placeholder="Descreva o seu estilo..." disabled={isPending} rows={5} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="file-upload" className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Ficheiro de Referência (Opcional)
        </Label>
        <Input id="file-upload" name="fileUpload" type="file" disabled={isPending} accept=".pdf,.doc,.docx,.txt,.odt" />
      </div>
      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? 'A processar...' : 'Guardar e Processar DNA'}
      </Button>
    </form>
  );
}