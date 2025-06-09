
// app/(dashboard)/historico/page.tsx
import { getSermonHistory } from '@/lib/mockApi';
import SermonHistoryList from '@/components/sermon-history-list';
import { Suspense } from 'react';

// Componente para exibir um esqueleto de carregamento
function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border bg-card text-card-foreground rounded-lg p-6 space-y-4 animate-pulse">
          <div className="h-6 w-3/4 bg-muted rounded"></div>
          <div className="h-4 w-1/2 bg-muted rounded"></div>
          <div className="space-y-2 pt-4">
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Componente assíncrono que busca os dados
async function HistoryData() {
  const sermons = await getSermonHistory();
  return <SermonHistoryList sermons={sermons} />;
}

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Histórico de Sermões</h1>
        <p className="text-muted-foreground">
          Acesse e revise todas as mensagens que você já gerou.
        </p>
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <HistoryData />
      </Suspense>
    </div>
  );
}
