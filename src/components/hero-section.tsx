'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Button } from './ui/button';
import { Calendar, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      // Set initial states
      gsap.set(bgImageRef.current, { scale: 1.15, opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(logoRef.current, { opacity: 0, y: 30, scale: 0.9 });
      gsap.set(taglineRef.current, { opacity: 0, y: 20, letterSpacing: '0.4em' });
      gsap.set(headingLine1Ref.current, { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(headingLine2Ref.current, { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(paragraphRef.current, { opacity: 0, y: 30 });
      gsap.set(buttonsRef.current, { opacity: 0, y: 20 });
      gsap.set(decorLineRef.current, { scaleX: 0 });

      // Background: slow cinematic zoom-in with fade
      tl.to(bgImageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
      })
        // Overlay fades in over the image
        .to(
          overlayRef.current,
          { opacity: 1, duration: 1.5, ease: 'power2.inOut' },
          0.3
        )
        // Logo fades in with gentle scale
        .to(
          logoRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
          0.6
        )
        // Small tagline drops in
        .to(
          taglineRef.current,
          { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 0.8 },
          1.0
        )
        // Decorative line expands
        .to(
          decorLineRef.current,
          { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
          1.2
        )
        // Heading line 1: clip-path reveal + slide up
        .to(
          headingLine1Ref.current,
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.2,
            ease: 'power4.out',
          },
          1.3
        )
        // Heading line 2: slightly delayed for cascade
        .to(
          headingLine2Ref.current,
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.2,
            ease: 'power4.out',
          },
          1.55
        )
        // Paragraph fades in softly
        .to(
          paragraphRef.current,
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          2.0
        )
        // Buttons arrive last
        .to(
          buttonsRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          2.3
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="kezdolap"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src="/bg2.png"
          alt="Hero Background"
          className="object-cover h-full w-full will-change-transform"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-linear-to-br from-massage-amber/50 via-massage-lime/50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        <div ref={logoRef} className="flex justify-center mb-8">
          <Image
            src="/images/test.png"
            alt="Bástya Masszázs"
            width={400}
            height={200}
            className="h-36 sm:h-44 lg:h-52 w-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <span
          ref={taglineRef}
          className="inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-massage-green-dark/80 mb-6"
        >
          Debrecen · Professzionális masszázs
        </span>

        {/* Decorative line */}
        <div className="flex justify-center mb-8">
          <div
            ref={decorLineRef}
            className="w-12 h-px bg-massage-green-dark/30 origin-center"
          />
        </div>

        <h1 className="font-heading font-light text-5xl sm:text-6xl lg:text-7xl text-massage-text mb-6 leading-tight">
          <span ref={headingLine1Ref} className="block">
            Engedd el a feszültséget,
          </span>
          <span ref={headingLine2Ref} className="block font-semibold mt-1">
            találd meg a békét
          </span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg sm:text-xl text-massage-text/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Professzionális masszázs szolgáltatások a tested és lelked megújulásáért. Tapasztald meg a
          teljes relaxáció érzését.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="text-base px-8">
            <a href="#kapcsolat">
              <Calendar className="w-5 h-5 mr-2" />
              Foglalj időpontot most
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="text-base px-8 bg-white/90 hover:bg-white text-massage-green-dark"
          >
            <a href="#szolgaltatasok">
              <Sparkles className="w-5 h-5 mr-2" />
              Szolgáltatások
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
