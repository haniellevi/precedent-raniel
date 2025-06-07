import cx from "classnames";
import { sfPro, inter } from "./fonts";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from "react";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cx(sfPro.variable, inter.variable)}>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
          </Suspense>
          <main className="relative z-10">{children}</main>
          <Footer />
          <Sonner />
        </body>
      </html>
    </ClerkProvider>
  );
}