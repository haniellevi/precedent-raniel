
import UsersTable from "@/components/admin/users-table";
import { Suspense } from "react";
import { AdminUser } from "@/lib/mockApi";

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
      <div className="h-32 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}

async function UsersData() {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/admin/users`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch users');
    const users: AdminUser[] = await res.json();
    return <UsersTable users={users} />;
}

export default function AdminUsersPage() {
  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Gerenciamento de Usuários</h1>
        <Suspense fallback={<LoadingSkeleton />}>
            <UsersData />
        </Suspense>
    </div>
  );
}
