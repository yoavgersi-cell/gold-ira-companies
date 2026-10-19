"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Best Gold IRA Companies", href: "/" },
  { label: "Reviews", href: "/reviews" },
  { label: "Compare", href: "/#compare" },
  { label: "Guides", href: "/articles" },
  { label: "Fee Calculator", href: "/gold-ira-fee-calculator" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-[#ECE7FA] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Gold IRA Planet home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="Gold IRA Planet logo" width={28} height={28} className="h-7 w-7" />
          <span className="flex items-baseline gap-1">
            <span className="text-[20px] font-extrabold tracking-tight">
              <span className="text-[#0F2540]">Gold IRA</span>{" "}
              <span className="text-[#B8862B]">Planet</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8A8A]">.com</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7 text-[14px] font-medium text-[#191919]">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#191919] hover:underline transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[#191919]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="sm:hidden border-t border-[#E5E5E5] bg-white px-4 py-3 space-y-3">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-[15px] font-medium text-[#191919] hover:text-[#1E3A5F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
