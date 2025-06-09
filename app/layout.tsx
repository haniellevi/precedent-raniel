
import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SermonAI - Gerador de Sermões com IA',
  description: 'Crie sermões de alto impacto com a sua voz e personalidade.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={inter.className}>
          <div className="relative flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="flex-1">
              <div className="container py-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
