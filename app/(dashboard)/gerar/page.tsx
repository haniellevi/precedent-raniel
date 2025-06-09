
// app/(dashboard)/gerar/page.tsx
'use client';

import { useState } from 'react';
import { Sermon } from '@/lib/mockApi';
import SermonGenerationForm from '@/components/sermon-generation-form';
import SermonDisplay from '@/components/sermon-display';

export default function GenerateSermonPage() {
  const [sermon, setSermon] = useState<Sermon | null>(null);

  return (
    <div className="space-y-6">
      {/* O formulário só será exibido se nenhum sermão foi gerado ainda */}
      {!sermon && (
        <>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Crie sua Mensagem</h1>
            <p className="text-muted-foreground">
              A ferramenta de criação para sermões de alto impacto.
            </p>
          </div>
          <SermonGenerationForm onSermonGenerated={setSermon} />
        </>
      )}

      {/* Exibe o sermão gerado e um botão para criar um novo */}
      {sermon && (
        <>
          <SermonDisplay sermon={sermon} />
          <div className="text-center pt-4">
            <button
              onClick={() => setSermon(null)}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Gerar um novo sermão
            </button>
          </div>
        </>
      )}
    </div>
  );
}
