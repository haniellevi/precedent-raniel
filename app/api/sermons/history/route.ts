
import { NextResponse } from 'next/server';
import { mockSermonHistoryData } from '@/lib/mockApi';

// Simula a busca do histórico de sermões
export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 800));
  return NextResponse.json(mockSermonHistoryData);
}
