
'use client';

import { useState, useTransition } from 'react';
import { toast } from "sonner";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, Youtube, User } from 'lucide-react';
import { updateDnaProfile, type DnaProfile } from '@/lib/mockApi';

interface DnaFormProps {
  initialProfile: DnaProfile;
}

export default function DnaForm({ initialProfile }: DnaFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    youtubeLink: '',
    personalDescription: initialProfile.customAttributes?.style || '',
    tone: initialProfile.customAttributes?.tone || '',
    vocabulary: initialProfile.customAttributes?.vocabulary?.join(', ') || ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      try {
        const result = await updateDnaProfile(formData);
        
        if (result.success) {
          toast.success("DNA atualizado com sucesso!", {
            description: "Suas preferências foram guardadas.",
          });
        }
      } catch (error) {
        toast.error("Ocorreu um erro", {
          description: "Não foi possível atualizar o DNA.",
        });
      }
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          type="url" 
          placeholder="https://www.youtube.com/watch?v=..." 
          disabled={isPending}
          value={formData.youtubeLink}
          onChange={(e) => handleInputChange('youtubeLink', e.target.value)}
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
          placeholder="Ex: Sou um pregador expositivo..." 
          disabled={isPending} 
          rows={5} 
          required
          value={formData.personalDescription}
          onChange={(e) => handleInputChange('personalDescription', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tone" className="flex items-center gap-2">
          Tom da Pregação
        </Label>
        <Input 
          id="tone" 
          placeholder="Ex: Inspirador e Encorajador" 
          disabled={isPending}
          value={formData.tone}
          onChange={(e) => handleInputChange('tone', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vocabulary" className="flex items-center gap-2">
          Vocabulário Preferido
        </Label>
        <p className="text-sm text-muted-foreground">
          Palavras ou expressões que usa frequentemente (separadas por vírgula).
        </p>
        <Input 
          id="vocabulary" 
          placeholder="Ex: graça, redenção, propósito, comunidade" 
          disabled={isPending}
          value={formData.vocabulary}
          onChange={(e) => handleInputChange('vocabulary', e.target.value)}
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
          type="file" 
          disabled={isPending} 
          accept=".pdf,.doc,.docx,.txt,.odt" 
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? 'A processar...' : 'Guardar DNA'}
      </Button>
    </form>
  );
}
