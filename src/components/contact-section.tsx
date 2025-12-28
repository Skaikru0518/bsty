'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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

      // Left cards animation - slide from left
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Map animation - slide from right
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%',
          },
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="kapcsolat" className="py-20 bg-massage-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-massage-text mb-4">
            Kapcsolat
          </h2>
          <p className="text-lg text-massage-text-muted max-w-2xl mx-auto leading-relaxed">
            Látogass el hozzám és tapasztald meg a professzionális masszázs varázsát
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div ref={cardsRef} className="flex flex-col gap-6">
            {/* Időpontfoglalás CTA */}
            <Card className="bg-massage-green text-white">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold mb-3">Időpontfoglalás</h3>
                <p className="text-white/80 mb-6">
                  Írj nekem Messengeren és foglald le az időpontodat egyszerűen!
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-massage-green hover:bg-massage-cream hover:text-massage-green-dark transition-all"
                >
                  <a href="https://m.me/573202689206362" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Üzenj Messengeren
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Kapcsolati információk */}
            <Card className="flex-1">
              <CardContent className="p-8 h-full flex flex-col justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-massage-lime shrink-0">
                    <Phone className="w-6 h-6 text-massage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-massage-text mb-1">Telefon</h3>
                    <a
                      href="tel:+36306091034"
                      className="text-massage-text-muted hover:text-massage-green transition-colors"
                    >
                      +36 30 609 1034
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-massage-lime shrink-0">
                    <MapPin className="w-6 h-6 text-massage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-massage-text mb-1">Cím</h3>
                    <p className="text-massage-text-muted">Debrecen, Vár utca 8. II./33 ajtó</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-massage-lime shrink-0">
                    <Clock className="w-6 h-6 text-massage-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-massage-text mb-1">Nyitvatartás</h3>
                    <div className="text-massage-text-muted space-y-1">
                      <p>Hétfő - Péntek: 8:00 - 18:00</p>
                      <p>Szombat: 8:00 - 18:00</p>
                      <p>Vasárnap: Előzetes egyeztetés alapján</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div ref={mapRef}>
            <Card className="overflow-hidden h-full p-0">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.8088219456013!2d21.62422777747445!3d47.53258489308421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470f003995ae6b%3A0xe4494384426b633e!2zQsOhc3R5YSBNYXNzesOhenM!5e0!3m2!1shu!2shu!4v1766942920571!5m2!1shu!2shu"
                  className="w-full h-full min-h-100"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bástya Masszázs helyszíne"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
