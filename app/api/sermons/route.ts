
import { NextResponse } from 'next/server';
import { mockSermonHistoryData } from '@/lib/mockApi';

// Simula a geração de um sermão
export async function POST(request: Request) {
  const params = await request.json();
  console.log('API RECEBEU DADOS PARA GERAR SERMÃO:', params);
  await new Promise(resolve => setTimeout(resolve, 2500));
  const newSermon = { 
    ...mockSermonHistoryData[0], 
    id: `gen-${Date.now()}`,
    title: `Sermão sobre ${params.theme || 'Vida Cristã'}`,
    parameters: {
      theme: params.theme || 'Vida Cristã',
      purpose: params.purpose || 'Inspirar',
      duration: parseInt(params.duration) || 20
    },
    createdAt: new Date().toISOString()
  };
  return NextResponse.json(newSermon);
}
