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
  {
    category: 'Svéd technikás arcfrissítő masszázs',
    icon: '◎',
    description:
      'Svéd masszázs technikával végzett arckezelés a bőr revitalizálásáért és az arcizmok ellazításáért',
    prices: [{ duration: '30', price: '6.500' }],
  },
];

export default function PricesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Hero header timeline (on load, no scroll trigger) ---
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      gsap.set(taglineRef.current, { autoAlpha: 0, y: 15, letterSpacing: '0.4em' });
      gsap.set(decorLineRef.current, { autoAlpha: 0, scaleX: 0 });
      gsap.set(headingRef.current, { autoAlpha: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(subtextRef.current, { autoAlpha: 0, y: 20 });

      heroTl
        .to(taglineRef.current, { autoAlpha: 1, y: 0, letterSpacing: '0.25em', duration: 0.7 }, 0.2)
        .to(
          decorLineRef.current,
          { autoAlpha: 1, scaleX: 1, duration: 0.5, ease: 'power2.inOut' },
          0.4
        )
        .to(
          headingRef.current,
          { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1 },
          0.5
        )
        .to(subtextRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.9);

      // --- Cards staggered on load ---
      const cards = cardsRef.current?.querySelectorAll('.price-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { autoAlpha: 0, y: 50, scale: 0.97 });

        heroTl.to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          1.1
        );

        // Price rows inside each card animate after card appears
        cards.forEach((card, cardIndex) => {
          const rows = card.querySelectorAll('.price-row');
          if (rows.length > 0) {
            gsap.set(rows, { opacity: 0, x: -15 });
            heroTl.to(
              rows,
              {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.06,
                ease: 'power3.out',
              },
              1.3 + cardIndex * 0.1
            );
          }
        });
      }

      // --- Info note ---
      gsap.set(infoRef.current, { autoAlpha: 0, y: 15 });
      ScrollTrigger.create({
        trigger: infoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(infoRef.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        },
      });

      // --- CTA section ---
      gsap.set(ctaRef.current, { autoAlpha: 0, y: 30 });
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 82%',
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.8 });

          const heading = ctaRef.current?.querySelector('.cta-heading');
          const text = ctaRef.current?.querySelector('.cta-text');
          const btn = ctaRef.current?.querySelector('.cta-btn');
          if (heading) {
            gsap.set(heading, { opacity: 0, y: 20 });
            tl.to(heading, { opacity: 1, y: 0, duration: 0.6 }, 0.2);
          }
          if (text) {
            gsap.set(text, { opacity: 0, y: 15 });
            tl.to(text, { opacity: 1, y: 0, duration: 0.5 }, 0.35);
          }
          if (btn) {
            gsap.set(btn, { opacity: 0, scale: 0.95 });
            tl.to(btn, { opacity: 1, scale: 1, duration: 0.5 }, 0.5);
          }
        },
      });
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
              <img
                src="/images/test.png"
                alt="Bástya masszázs"
                width={200}
                height={100}
                className="h-22 mt-2 w-auto"
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
      <section className="relative z-10 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            ref={taglineRef}
            className="invisible inline-block text-xs font-medium uppercase tracking-[0.25em] text-massage-green-dark/70 mb-4"
          >
            Kezelések & árak
          </span>
          <div className="flex justify-center mb-5">
            <div
              ref={decorLineRef}
              className="invisible w-10 h-px bg-massage-green-dark/25 origin-center"
            />
          </div>
          <h1
            ref={headingRef}
            className="invisible font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-massage-text mb-4 tracking-tight"
          >
            Árlista
          </h1>
          <p
            ref={subtextRef}
            className="invisible text-lg text-massage-text-muted max-w-xl mx-auto leading-relaxed"
          >
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
                className={`price-card invisible group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
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
                        className="price-row opacity-0 flex items-center justify-between group/item hover:bg-massage-cream/50 -mx-3 px-3 py-2 rounded-lg transition-colors"
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
          <div ref={infoRef} className="invisible mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-massage-sand/30 rounded-full px-6 py-3">
              <p className="text-sm text-massage-text-muted">
                Az árak forintban értendők · Készpénzes fizetés lehetséges
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="invisible mt-16 text-center">
            <div className="bg-linear-to-br from-massage-green to-massage-green-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <h3 className="cta-heading font-heading text-2xl sm:text-3xl font-light text-white mb-3">
                  Készen állsz a pihenésre vagy a regenerációra?
                </h3>
                <p className="cta-text text-white/80 mb-6 max-w-md mx-auto">
                  Foglalj időpontot Messengeren és engedd el a mindennapok feszültségét
                </p>
                <Button
                  asChild
                  size="lg"
                  className="cta-btn bg-white text-massage-green hover:bg-massage-cream hover:text-massage-green-dark text-base px-8 shadow-lg"
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
