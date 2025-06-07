
import "@/app/globals.css";
import { inter } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.variable, "bg-gray-50")}>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback={<div>A carregar...</div>}>
            <NavBar />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <Analytics />
          <Sonner />
        </body>
      </html>
    </ClerkProvider>
  );
}
