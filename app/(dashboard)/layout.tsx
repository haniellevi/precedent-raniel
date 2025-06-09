
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8">
      {children}
    </div>
  );
}
