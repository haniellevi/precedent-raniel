
// components/sermon-history-list.tsx
'use client';

import { Sermon } from '@/lib/mockApi';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Calendar, Clock } from 'lucide-react';

interface SermonHistoryListProps {
  sermons: Sermon[];
}

export default function SermonHistoryList({ sermons }: SermonHistoryListProps) {
  if (sermons.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold">Nenhum sermão encontrado</h3>
        <p className="text-muted-foreground mt-2">Você ainda não gerou nenhum sermão. Comece agora!</p>
        <Button className="mt-4">Gerar primeiro sermão</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sermons.map((sermon) => (
        <Card key={sermon.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{sermon.title}</CardTitle>
            <CardDescription className="flex items-center pt-1">
              <BookOpen className="mr-1.5 h-4 w-4" /> 
              {sermon.parameters.theme}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-sm text-muted-foreground space-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Gerado em: {new Date(sermon.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Duração: {sermon.parameters.duration} min</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver Sermão
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
