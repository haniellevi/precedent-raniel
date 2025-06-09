// app/(dashboard)/historico/page.tsx
import SermonHistoryList from "@/components/sermon-history-list";
import { Suspense } from "react";
import { Sermon } from '@/lib/mockApi';

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}

async function HistoryData() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/sermons/history`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    const sermons: Sermon[] = await res.json();
    return <SermonHistoryList sermons={sermons} />;
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    return <SermonHistoryList sermons={[]} />;
  }
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