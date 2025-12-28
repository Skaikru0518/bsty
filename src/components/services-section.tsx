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

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Cards staggered animation
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 75%',
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power3.out',
            });
          },
        });
      }

      // CTA button animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="szolgaltatasok" className="py-20 bg-massage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-massage-text mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-lg text-massage-text-muted max-w-2xl mx-auto leading-relaxed">
            Válassz igényeidnek megfelelő kezelést a teljes körű ellazulásért
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.name}
              className="service-card group border-massage-pink hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden p-4"
            >
              {/* Kép */}
              <div className="relative h-64 rounded-lg bg-massage-lime/30 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-12 text-center">
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
