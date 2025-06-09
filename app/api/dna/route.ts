
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

// Busca o perfil de DNA do utilizador autenticado
export async function GET() {
  const { userId: clerkUserId } = auth();

  if (!clerkUserId) {
    return new Response("Unauthorized", { status: 401 });
  }

  let dnaProfile = await prisma.dnaProfile.findUnique({
    where: { userId: clerkUserId },
  });

  // Se o utilizador não tem um perfil, cria um padrão na base de dados
  if (!dnaProfile) {
    dnaProfile = await prisma.dnaProfile.create({
        data: {
            userId: clerkUserId,
            name: "Meu Perfil de Pregação",
            style: "Expositivo",
            tone: "Inspirador",
        }
    })
  }
  
  return NextResponse.json(dnaProfile);
}

// Cria ou atualiza o perfil de DNA do utilizador autenticado
export async function POST(request: Request) {
    const { userId: clerkUserId } = auth();
    if (!clerkUserId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const data = await request.json();

    const updatedProfile = await prisma.dnaProfile.upsert({
        where: { userId: clerkUserId },
        update: {
            style: data.style,
            tone: data.tone,
        },
        create: {
            userId: clerkUserId,
            style: data.style,
            tone: data.tone,
        }
    });

    return NextResponse.json(updatedProfile);
}
