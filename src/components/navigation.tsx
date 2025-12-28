'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import { X, Menu } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { href: string; label: string }[] = [
    { href: '#kezdolap', label: 'Kezdőlap' },
    { href: '#szolgaltatasok', label: 'Szolgáltatások' },
    { href: '#rolam', label: 'Rólam' },
    { href: '/prices', label: 'Áraim' },
    { href: '#kapcsolat', label: 'Kapcsolat' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-massage-cream/95 backdrop-blur-sm border-b border-massage-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={'#kezdolap'}>
            <Image
              src={'/images/logo2.png'}
              alt="Bástya masszázs"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, _idx) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <a href="https://m.me/573202689206362" target="_blank" rel="noopener noreferrer">
                Időpont foglalás
              </a>
            </Button>
          </div>

          {/* Mobile menu  */}
          <Button
            className="md:hidden"
            variant="ghost"
            size={'icon'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-massage-yellow">
            <div className="flex-col flex gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium text-massage-text hover:text-massage-green hover:bg-massage-sand/50 transition-all py-3 px-4 rounded-lg ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    transitionDuration: '300ms',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className={`w-full mt-2 transition-all ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
                  transitionDuration: '300ms',
                }}
              >
                <a
                  href="https://m.me/573202689206362"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Időpont foglalás
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
