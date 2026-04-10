'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        defaults: { ease: 'power4.out' },
      });

      gsap.set(taglineRef.current, { autoAlpha: 0, y: 15, letterSpacing: '0.4em' });
      gsap.set(decorLineRef.current, { autoAlpha: 0, scaleX: 0 });
      gsap.set(headingRef.current, { autoAlpha: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(subtextRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(widgetRef.current, { autoAlpha: 0, y: 30 });

      tl.to(taglineRef.current, { autoAlpha: 1, y: 0, letterSpacing: '0.25em', duration: 0.7 })
        .to(decorLineRef.current, { autoAlpha: 1, scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, 0.2)
        .to(headingRef.current, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1 }, 0.35)
        .to(subtextRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.7)
        .to(widgetRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-massage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            ref={taglineRef}
            className="invisible inline-block text-xs font-medium uppercase tracking-[0.25em] text-massage-green-dark/70 mb-4"
          >
            Visszajelzések
          </span>
          <div className="flex justify-center mb-5">
            <div ref={decorLineRef} className="invisible w-10 h-px bg-massage-green-dark/25 origin-center" />
          </div>
          <h2
            ref={headingRef}
            className="invisible font-heading text-4xl sm:text-5xl font-light text-massage-text mb-4"
          >
            Vendégeim véleménye
          </h2>
          <p
            ref={subtextRef}
            className="invisible text-lg text-massage-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Olvasd el, mit mondanak rólam a vendégeim
          </p>
        </div>

        <div ref={widgetRef} className="invisible">
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          <div
            className="elfsight-app-e98fc5e6-1af1-40f5-9e51-a168efb91582"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
