// Caminho do ficheiro: components/layout/navbar.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const scrolled = useScroll(50);
  const [isMounted, setIsMounted] = useState(false);

  // useEffect só é executado no cliente (navegador).
  // Isto garante que o estado isMounted só se torna verdadeiro no cliente.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="flex items-center font-display text-2xl">
          <Image
            src="/logo.png"
            alt="Logo da Precedent"
            width="30"
            height="30"
            className="mr-2 rounded-sm"
          ></Image>
          <p>Precedent</p>
        </Link>
        <div>
          {/* Só renderizamos os botões do Clerk depois de o componente ser montado no cliente */}
          {isMounted && (
            <>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="default" size="sm">Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
