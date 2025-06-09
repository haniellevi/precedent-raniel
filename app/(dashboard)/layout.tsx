
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // O Header e Footer agora estão no layout raiz (app/layout.tsx)
  // Este layout serve apenas para agrupar as rotas do dashboard.
  return <>{children}</>;
}
