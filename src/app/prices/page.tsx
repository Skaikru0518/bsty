'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const priceData = [
  {
    category: 'Kombinált masszázs',
    icon: '❖',
    description: 'Masszázs + lávakő + vákuumos/csúsztatott köpölyözés – felár nélkül',
    highlight: true,
    prices: [
      { duration: '30', price: '6.500' },
      { duration: '45', price: '7.600' },
      { duration: '60', price: '9.500' },
      { duration: '90', price: '13.500' },
    ],
  },
  {
    category: 'Svéd-frissítő masszázs',
    icon: '✦',
    description: 'Klasszikus relaxációs masszázs a test és lélek felfrissítéséért',
    prices: [
      { duration: '30', price: '6.500' },
      { duration: '45', price: '7.600' },
      { duration: '60', price: '9.500' },
      { duration: '90', price: '13.500' },
    ],
  },
  {
    category: 'Sportmasszázs',
    icon: '◆',
    description: 'Intenzív kezelés sportolóknak és aktív életmódot folytatóknak',
    prices: [
      { duration: '30', price: '6.500' },
      { duration: '45', price: '7.600' },
      { duration: '60', price: '9.500' },
      { duration: '90', price: '13.500' },
    ],
  },
  {
    category: 'Lávaköves masszázs',
    icon: '●',
    description: 'Vulkanikus kövek melegével végzett mélyen relaxáló kezelés',
    prices: [
      { duration: '30', price: '6.500' },
      { duration: '45', price: '7.600' },
      { duration: '60', price: '9.500' },
      { duration: '90', price: '13.500' },
    ],
  },
  {
    category: 'Köpölyözés',
    icon: '○',
    description: 'Hagyományos kínai gyógyászati módszer testtájanként',
    prices: [
      { duration: '20', price: '3.500' },
      { duration: '30', price: '5.000' },
    ],
  },
  {
    category: 'Indiai fejmasszázs',
    icon: '✧',
    description: 'Ősi ayurvédikus technika a fej, nyak és váll területén',
    prices: [{ duration: '30', price: '6.500' }],
  },
];

export default function PricesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation on load
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Price cards staggered animation
      const cards = cardsRef.current?.querySelectorAll('.price-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 50 });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Info note animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 90%',
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-massage-cream">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 bg-massage-lime/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-massage-amber/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-massage-sand/50 bg-massage-cream/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="Bástya Masszázs"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Button
              asChild
              variant="ghost"
              className="text-massage-text hover:text-massage-green hover:bg-massage-sand/50"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Vissza
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-16 pb-12 opacity-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-massage-green/50" />
            <Sparkles className="w-5 h-5 text-massage-green/50" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-massage-green/50" />
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-massage-text mb-4 tracking-tight">
            Árlistánk
          </h1>
          <p className="text-lg text-massage-text-muted max-w-xl mx-auto leading-relaxed">
            Fedezd fel szolgáltatásaimat és válaszd ki a számodra legmegfelelőbb kezelést
          </p>
        </div>
      </section>

      {/* Price Cards */}
      <main className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {priceData.map((service) => (
              <article
                key={service.category}
                className={`price-card opacity-0 group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  service.highlight ? 'ring-2 ring-massage-green/20' : ''
                }`}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-massage-green text-white text-xs font-medium px-3 py-1 rounded-full">
                    Ajánlott
                  </div>
                )}

                {/* Card Header */}
                <div className="relative px-6 pt-6 pb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-massage-green/60 mt-1">{service.icon}</span>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-semibold text-massage-text mb-1">
                        {service.category}
                      </h2>
                      <p className="text-sm text-massage-text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-linear-to-r from-transparent via-massage-sand to-transparent" />

                {/* Price List */}
                <div className="px-6 py-4">
                  <div className="space-y-3">
                    {service.prices.map((item, priceIndex) => (
                      <div
                        key={priceIndex}
                        className="flex items-center justify-between group/item hover:bg-massage-cream/50 -mx-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2 text-massage-text">
                          <Clock className="w-4 h-4 text-massage-text-muted/60" />
                          <span className="font-medium">{item.duration}</span>
                          <span className="text-massage-text-muted">perc</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-semibold text-massage-green tabular-nums">
                            {item.price}
                          </span>
                          <span className="text-sm text-massage-text-muted">Ft</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-massage-lime via-massage-green to-massage-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            ))}
          </div>

          {/* Info Note */}
          <div ref={infoRef} className="mt-12 text-center opacity-0">
            <div className="inline-flex items-center gap-3 bg-massage-sand/30 rounded-full px-6 py-3">
              <p className="text-sm text-massage-text-muted">
                Az árak forintban értendők · Készpénzes fizetés lehetséges
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="mt-16 text-center opacity-0">
            <div className="bg-linear-to-br from-massage-green to-massage-green-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <h3 className="font-heading text-2xl sm:text-3xl font-light text-white mb-3">
                  Készen állsz a pihenésre vagy a regenerációra?
                </h3>
                <p className="text-white/80 mb-6 max-w-md mx-auto">
                  Foglalj időpontot Messengeren és engedd el a mindennapok feszültségét
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-massage-green hover:bg-massage-cream hover:text-massage-green-dark text-base px-8 shadow-lg"
                >
                  <a href="https://m.me/573202689206362" target="_blank" rel="noopener noreferrer">
                    Időpont foglalás
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-massage-sand/50 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-massage-text-muted">
            &copy; {new Date().getFullYear()} Bástya Masszázs. Minden jog fenntartva.
          </p>
        </div>
      </footer>
    </div>
  );
}
