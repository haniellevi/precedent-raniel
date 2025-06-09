
// components/sermon-display.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Sermon } from '@/lib/mockApi';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Lightbulb, BookOpen, Clock } from 'lucide-react';

interface SermonDisplayProps {
  sermon: Sermon;
}

export default function SermonDisplay({ sermon }: SermonDisplayProps) {
  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">{sermon.title}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center"><BookOpen className="mr-1.5 h-4 w-4" />{sermon.parameters.theme}</div>
            <div className="flex items-center"><Lightbulb className="mr-1.5 h-4 w-4" />{sermon.parameters.purpose}</div>
            <div className="flex items-center"><Clock className="mr-1.5 h-4 w-4" />Aprox. {sermon.parameters.duration} min</div>
          </div>
        </CardHeader>
        <CardContent>
          <article className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{sermon.content}</ReactMarkdown>
          </article>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Sugestões de Enriquecimento</CardTitle>
          <CardDescription>Use estas ideias para tornar sua mensagem ainda mais impactante.</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{sermon.enrichmentSuggestions}</ReactMarkdown>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
