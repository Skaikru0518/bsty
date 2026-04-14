'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const decorBlockRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        defaults: { ease: 'power4.out' },
      });

      // Initial states
      gsap.set(decorBlockRef.current, { scaleY: 0, transformOrigin: 'top' });
      gsap.set(imageWrapRef.current, { clipPath: 'inset(100% 0 0 0)', visibility: 'visible' });
      gsap.set(taglineRef.current, { visibility: 'visible', opacity: 0, y: 15, letterSpacing: '0.4em' });
      gsap.set(headingRef.current, { visibility: 'visible', opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(decorLineRef.current, { visibility: 'visible', scaleX: 0 });
      gsap.set(greetingRef.current, { visibility: 'visible', opacity: 0, y: 20 });

      const paragraphs = paragraphsRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.set(paragraphs, { visibility: 'visible', opacity: 0, y: 25 });
      }

      // --- Left side: image ---

      // Decorative block appears first
      tl.to(decorBlockRef.current, {
        scaleY: 1,
        duration: 0.7,
        ease: 'power3.inOut',
      })
        // Image reveals with clip-path (top to bottom)
        .to(
          imageWrapRef.current,
          { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' },
          0.3
        )

        // --- Right side: text content ---

        // Tagline with tracking
        .to(
          taglineRef.current,
          { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 0.7 },
          0.5
        )
        // Heading clip-path reveal
        .to(
          headingRef.current,
          { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1 },
          0.7
        )
        // Decorative line
        .to(
          decorLineRef.current,
          { scaleX: 1, duration: 0.5, ease: 'power2.inOut' },
          0.9
        )
        // Greeting text
        .to(
          greetingRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          1.1
        );

      // Paragraphs stagger in
      if (paragraphs) {
        tl.to(
          paragraphs,
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
          1.3
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rolam" className="py-20 bg-massage-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with decorative block */}
          <div className="relative">
            <div
              ref={decorBlockRef}
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-massage-green/10"
            />
            <div
              ref={imageWrapRef}
              className="invisible relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/zoli.png"
                alt="Masszőr"
                className="w-full block"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              ref={taglineRef}
              className="invisible inline-block text-xs font-medium uppercase tracking-[0.25em] text-massage-green-dark/70 mb-3"
            >
              Professzionális masszázs
            </span>

            <h2
              ref={headingRef}
              className="invisible font-heading text-4xl sm:text-5xl font-light text-massage-text mb-4"
            >
              Rólam
            </h2>

            <div className="flex mb-5">
              <div
                ref={decorLineRef}
                className="invisible w-10 h-px bg-massage-green-dark/25 origin-left"
              />
            </div>

            <p
              ref={greetingRef}
              className="invisible text-lg font-medium text-massage-green mb-4"
            >
              Üdvözlöm a Bástya Masszázs weboldalán!
            </p>

            <div ref={paragraphsRef} className="space-y-4 text-massage-text leading-relaxed">
              <p className="invisible">
                A masszázst a katonaság mellett végzem, ahol több mint 22 év szolgálati
                tapasztalatot szereztem. A katonai pálya megtanított arra, milyen komoly terhelésnek
                lehet kitéve az emberi test és elme – legyen szó fizikai igénybevételről, stresszről
                vagy a folyamatos teljesítménykényszerről.
              </p>
              <p className="invisible">
                Hobbi sportolóként számos mozgásformát kipróbáltam, így saját tapasztalatból ismerem
                az edzés, a túlterhelés és a nem megfelelő regeneráció következményeit. Képesítéseim
                között szerepel a svédmasszázs, sportmasszázs, valamint a keleti gyógyászati
                módszerek, mint a köpölyözés.
              </p>
              <p className="invisible">
                Célom, hogy masszázsaimmal segítsem vendégeimet a regenerációban, az
                izomfeszültségek oldásában, a fájdalom csökkentésében és a teljesítmény javításában.
                Minden kezelést egyénileg alakítok ki, figyelembe véve a vendég egyedi igényeit és
                állapotát.
              </p>
              <p className="invisible">
                Szolgáltatásaimat azoknak ajánlom, akik aktív életet élnek, sportolnak, fizikailag
                megterhelő munkát végeznek, vagy egyszerűen szeretnének újra fájdalommentesen és
                felszabadultan mozogni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
