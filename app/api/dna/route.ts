
import { NextResponse } from 'next/server';
import { mockDnaProfileData } from '@/lib/mockApi';

// Simula a busca do perfil de DNA
export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simula latência
  return NextResponse.json(mockDnaProfileData);
}

// Simula a atualização do perfil de DNA
export async function POST(request: Request) {
  const data = await request.json();
  console.log('API RECEBEU DADOS PARA ATUALIZAR DNA:', data);
  await new Promise(resolve => setTimeout(resolve, 1500));
  return NextResponse.json({ success: true });
}
