
import { NextResponse } from 'next/server';
import { mockAdminMetricsData } from '@/lib/mockApi';

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula latência
  return NextResponse.json(mockAdminMetricsData);
}
