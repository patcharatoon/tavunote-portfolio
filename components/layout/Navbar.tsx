'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import ActionButton from '../ui/ActionButton';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-9 lg:px-12">
      <Logo />
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-9 text-sm font-semibold text-[#6d687b] md:flex"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-violet">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="hidden md:block">
        <ActionButton href="#pricing">
          Explore plans <ArrowRight size={15} />
        </ActionButton>
      </div>
      <button
        type="button"
        className="rounded-xl border border-[#e9e4f3] bg-white p-2 md:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-5 right-5 top-[80px] flex flex-col gap-4 rounded-3xl border border-[#ede8f6] bg-white p-6 text-sm font-semibold shadow-card md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1 transition hover:text-violet"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
