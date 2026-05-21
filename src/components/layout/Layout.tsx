import type { PropsWithChildren } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-atelier-black text-atelier-ivory">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
