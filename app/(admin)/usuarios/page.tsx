
import { getAdminUsers } from "@/lib/mockApi";
import UsersTable from "@/components/admin/users-table";
import { Suspense } from "react";

function LoadingSkeleton() {
    return <div className="h-64 w-full bg-muted rounded-lg animate-pulse"></div>
}

async function UsersData() {
    const users = await getAdminUsers();
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
