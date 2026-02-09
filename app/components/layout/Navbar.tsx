"use client";

import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/#features", type: "anchor" },
    { name: "Pricing", href: "/pricing", type: "link" },
    { name: "About", href: "/about", type: "link" },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:bg-secondary transition-colors">
            <FileText size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Editexty
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ),
          )}
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-2xl">
            <Link href="/get-started">Get Started</Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ),
            )}
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-2xl">
              <Link href="/get-started" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
