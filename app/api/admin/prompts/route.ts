
import { NextResponse } from 'next/server';
import { mockAgentPromptsData } from '@/lib/mockApi';

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 600));
  return NextResponse.json(mockAgentPromptsData);
}

export async function POST(request: Request) {
    const { id, prompt } = await request.json();
    console.log(`API RECEBEU DADOS PARA ATUALIZAR PROMPT ${id}:`, prompt);
    await new Promise(resolve => setTimeout(resolve, 1200));
    return NextResponse.json({ success: true });
}
