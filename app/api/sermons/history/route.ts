
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId: clerkUserId } = auth();

  if (!clerkUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const sermons = await prisma.sermon.findMany({
    where: { userId: clerkUserId },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(sermons);
}
