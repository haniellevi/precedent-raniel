
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import MainNav from '@/components/layout/main-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="SermonAI Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-bold">SermonAI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <MainNav />
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild variant="ghost">
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Cadastre-se</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
