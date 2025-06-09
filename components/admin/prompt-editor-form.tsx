
'use client';

import { useState } from 'react';
import { AgentPrompt } from '@/lib/mockApi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface PromptEditorFormProps {
  promptData: AgentPrompt;
}

export default function PromptEditorForm({ promptData }: PromptEditorFormProps) {
  const [prompt, setPrompt] = useState(promptData.prompt);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    await fetch('/api/admin/prompts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: promptData.id, prompt: prompt }),
    });

    setIsLoading(false);
    // Poderíamos adicionar uma notificação de sucesso aqui (toast)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{promptData.name}</CardTitle>
        <CardDescription>{promptData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor={promptData.id} className="sr-only">Prompt</Label>
            <Textarea
              id={promptData.id}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={15}
              className="font-mono text-sm"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Salvar Prompt
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
