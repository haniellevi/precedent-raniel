
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SignedIn } from '@clerk/nextjs';

const navItems = [
  { name: 'Gerar Sermão', href: '/gerar' },
  { name: 'Histórico', href: '/historico' },
  { name: 'Meu DNA', href: '/dna' },
];

export default function MainNav() {
  const pathname = usePathname();
  
  return (
    <SignedIn>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith(item.href) ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </SignedIn>
  );
}
