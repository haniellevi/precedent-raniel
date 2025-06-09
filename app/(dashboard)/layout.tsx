
import { ReactNode } from 'react';
import Footer from '@/components/layout/footer';
import MainHeader from '@/components/layout/main-header';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainHeader />
      <main className="flex-1">
        <div className="container py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
