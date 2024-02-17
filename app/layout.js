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
        <footer className="fixed flex justify-between items-center bottom-5 left-5 w-[95vw]">
          <div className="w-64">
            <p className="font-bold text-lg">
              Backstage Banter magazine offers an exclusive peek behind the curtains of the entertainment industry, revealing untold stories, insider secrets,
              and captivating interviews with the stars. Dive deep into the world of showbiz with us.
            </p>
            <p className="text-sm font-light my-2">2024 Published by Banter Records</p>
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="menulink issue7" href="#issue7">
                Issue #7
              </a>
            </li>
            <li>
              <a className="menulink issue6" href="#issue6">
                Issue #6
              </a>
            </li>
            <li>
              <a className="menulink issue5" href="#issue5">
                Issue #5
              </a>
            </li>
            <li>
              <a className="menulink issue4" href="#issue4">
                Issue #4
              </a>
            </li>
            <li>
              <a className="menulink issue3" href="#issue3">
                Issue #3
              </a>
            </li>
            <li>
              <a className="menulink issue2" href="#issue2">
                Issue #2
              </a>
            </li>
            <li>
              <a className="menulink issue1" href="#issue1">
                Issue #1
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
