'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: 'Svédmasszázs',
    description:
      'Klasszikus teljes testmasszázs a mély relaxációért. Oldja a feszültséget és javítja a vérkeringést.',
    icon: '/images/back.png',
    duration: '60 perc',
    price: '9 500 Ft',
  },
  {
    name: 'Sportmasszázs',
    description:
      'Célzott terápia sportolóknak és aktív életmódot folytatóknak. Megelőzi a sérüléseket és gyorsítja a regenerációt.',
    icon: '/images/lymph.png',
    duration: '60 perc',
    price: '9 500 Ft',
  },
  {
    name: 'Köpölyözés',
    description:
      'Hagyományos kínai gyógyászati módszer a mélyebb izomrétegek kezelésére. Javítja az anyagcserét és az immunrendszert.',
    icon: '/images/cupping.png',
    duration: '30 perc',
    price: '5 000 Ft',
  },
  {
    name: 'Lávaköves masszázs',
    description:
      'Felmelegített vulkanikus kövekkel végzett masszázs. Mély relaxáció és energetizálás egyszerre.',
    icon: '/images/lava.png',
    duration: '60 perc',
    price: '9 500 Ft',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Header reveal ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        defaults: { ease: 'power4.out' },
      });

      gsap.set(taglineRef.current, { visibility: 'visible', opacity: 0, y: 15, letterSpacing: '0.4em' });
      gsap.set(decorLineRef.current, { visibility: 'visible', scaleX: 0 });
      gsap.set(headingRef.current, { visibility: 'visible', opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(subtextRef.current, { visibility: 'visible', opacity: 0, y: 20 });

      headerTl
        .to(taglineRef.current, {
          opacity: 1,
          y: 0,
          letterSpacing: '0.25em',
          duration: 0.7,
        })
        .to(decorLineRef.current, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, 0.2)
        .to(
          headingRef.current,
          { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1 },
          0.35
        )
        .to(subtextRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.7);

      // --- Cards staggered reveal ---
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { visibility: 'visible', opacity: 0, y: 50, scale: 0.97 });

        // Each card's image
        const images = cardsRef.current?.querySelectorAll('.service-image');
        if (images) gsap.set(images, { scale: 1.15, opacity: 0 });

        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 72%',
          onEnter: () => {
            // Cards slide up with stagger
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              stagger: 0.15,
              ease: 'power3.out',
            });

            // Images zoom in after card appears
            if (images) {
              gsap.to(images, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                delay: 0.2,
                ease: 'power2.out',
              });
            }
          },
        });
      }

      // --- CTA ---
      gsap.set(ctaRef.current, { visibility: 'visible', opacity: 0, y: 15 });
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="szolgaltatasok" className="py-20 bg-massage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            ref={taglineRef}
            className="invisible inline-block text-xs font-medium uppercase tracking-[0.25em] text-massage-green-dark/70 mb-4"
          >
            Kezelések
          </span>
          <div className="flex justify-center mb-5">
            <div ref={decorLineRef} className="invisible w-10 h-px bg-massage-green-dark/25 origin-center" />
          </div>
          <h2
            ref={headingRef}
            className="invisible font-heading text-4xl sm:text-5xl font-light text-massage-text mb-4"
          >
            Szolgáltatásaim
          </h2>
          <p
            ref={subtextRef}
            className="invisible text-lg text-massage-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Válassz igényeidnek megfelelő kezelést a teljes körű ellazulásért
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.name}
              className="service-card invisible group border-massage-pink hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden p-4"
            >
              <div className="relative h-64 rounded-lg bg-massage-lime/30 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.name}
                  fill
                  className="service-image object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="flex-1 flex flex-col">
                <CardTitle className="font-heading text-xl">{service.name}</CardTitle>
                <CardDescription className="leading-relaxed flex-1">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between pt-4 border-t border-massage-pink">
                  <div className="flex items-center gap-1 text-sm text-massage-text-muted">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <span className="font-semibold text-massage-green">{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="invisible mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="text-base px-8 group">
            <Link href="/prices">
              Teljes árlista megtekintése
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
