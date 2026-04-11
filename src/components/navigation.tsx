'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '#kezdolap', label: 'Kezdőlap' },
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#rolam', label: 'Rólam' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
  { href: '/prices', label: 'Áraim' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#kezdolap');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['kezdolap', 'szolgaltatasok', 'rolam', 'kapcsolat'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-massage-cream/95 backdrop-blur-xl shadow-sm' : 'bg-massage-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo */}
            <Link href="#kezdolap" className="shrink-0">
              <Image
                src="/images/test.png"
                alt="Bástya masszázs"
                width={200}
                height={100}
                className="h-22 mt-2 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 text-[0.938rem] font-medium transition-colors duration-300 ${
                          isActive
                            ? 'text-massage-green-dark'
                            : 'text-massage-text-muted hover:text-massage-text'
                        }`}
                      >
                        {link.label}
                        {/* Active dot indicator */}
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-1 h-1 rounded-full bg-massage-green transition-all duration-300 ${
                            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Separator */}
              <div className="w-px h-5 bg-massage-text/10 mx-5" />

              {/* CTA */}
              <a
                href="https://m.me/573202689206362"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 bg-massage-green text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:bg-massage-green-dark hover:shadow-lg hover:shadow-massage-green/15 active:scale-[0.97]"
              >
                Időpont foglalás
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[60] md:hidden flex items-center justify-center w-10 h-10 -mr-2"
              aria-label={isMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            >
              <div className="relative w-[18px] h-3 flex flex-col justify-between">
                <span
                  className={`block w-full h-[1.5px] bg-massage-text rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-[5.25px]' : ''
                  }`}
                />
                <span
                  className={`block w-full h-[1.5px] bg-massage-text rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-[5.25px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-massage-cream transition-opacity duration-400 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8">
          <nav className="space-y-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group flex items-center gap-5 py-3.5 transition-all ease-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{
                    transitionDuration: '400ms',
                    transitionDelay: isMenuOpen ? `${100 + i * 50}ms` : '0ms',
                  }}
                >
                  {/* Number */}
                  <span
                    className={`text-xs tabular-nums font-medium w-5 transition-colors duration-300 ${
                      isActive ? 'text-massage-green' : 'text-massage-text-muted/50'
                    }`}
                  >
                    0{i + 1}
                  </span>

                  {/* Line */}
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-massage-green'
                        : 'w-4 bg-massage-text/20 group-hover:w-8 group-hover:bg-massage-text/40'
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`text-2xl font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-massage-green-dark'
                        : 'text-massage-text group-hover:text-massage-text'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`mt-10 transition-all ease-out ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              transitionDuration: '400ms',
              transitionDelay: isMenuOpen ? `${100 + navLinks.length * 50}ms` : '0ms',
            }}
          >
            <a
              href="https://m.me/573202689206362"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="group inline-flex items-center gap-2 bg-massage-green text-white text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 hover:bg-massage-green-dark active:scale-[0.97]"
            >
              Időpont foglalás
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </div>

          {/* Bottom info */}
          <div
            className={`absolute bottom-8 left-8 right-8 flex items-center justify-between text-[0.7rem] text-massage-text-muted tracking-widest uppercase transition-all ease-out ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDuration: '400ms',
              transitionDelay: isMenuOpen ? '500ms' : '0ms',
            }}
          >
            <span>+36 30 609 1034</span>
            <span>Debrecen</span>
          </div>
        </div>
      </div>
    </>
  );
}
