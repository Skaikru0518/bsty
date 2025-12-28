'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { Calendar, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([headingRef.current, subheadingRef.current, paragraphRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create timeline
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 1,
        },
      });

      // Animate elements with stagger
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
      })
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          '-=0.8'
        )
        .to(
          paragraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.4'
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="kezdolap" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={'/bg2.png'} alt="Hero Background" className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-linear-to-br from-massage-amber/50 via-massage-lime/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          ref={headingRef}
          className="font-heading font-light text-5xl sm:text-6xl lg:text-7xl text-massage-text mb-6 leading-tight text-balance"
        >
          Engedd el a feszültséget,
          <br />
          <span ref={subheadingRef} className="font-semibold inline-block">
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
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
