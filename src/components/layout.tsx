import React from "react";
import Header from "./header";
import Footer from "./footer";
import WhatsappButton from "./whatsapp-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[104px]">{children}</main>
      <WhatsappButton />
      <Footer />
    </>
  );
}
