import React from "react";
import Header from "./header";
import Footer from "./footer";
import waLogo from "../assets/wa.png";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[104px]">{children}</main>
      <button>
        <img src={waLogo} alt="contact Whatsapp" className="fixed z-50 bottom-16 right-16 hover:-translate-y-2 duration-300" />
      </button>
      <Footer />
    </>
  );
}
