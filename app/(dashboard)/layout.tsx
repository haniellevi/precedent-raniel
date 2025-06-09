import { ReactNode } from 'react';
import { auth } from '@clerk/nextjs/server';
import { notFound } from 'next/navigation';
import MainHeader from '@/components/layout/main-header';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main className="py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}