
// app/(dashboard)/layout.tsx
import { ReactNode } from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="SermonAI Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="inline-block font-bold">SermonAI</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/dna"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Meu DNA
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
               <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>
      
      <main className="container flex-1 items-start py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
