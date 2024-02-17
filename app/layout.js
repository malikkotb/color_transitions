"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import "./globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="fixed items-center z-50 w-[95vw] top-5 left-5 flex justify-between">
          <p className="font-bold text-3xl">BACKSTAGE BANTER</p>
          <p className="text-xl font-bold">info@banter.com</p>
        </header>
        {children}
      </body>
    </html>
  );
}
