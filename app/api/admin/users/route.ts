
import { NextResponse } from 'next/server';
import { mockAdminUsersData } from '@/lib/mockApi';

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 800));
  return NextResponse.json(mockAdminUsersData);
}
