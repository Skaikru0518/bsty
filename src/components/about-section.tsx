'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation - slide in from left
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content animation - slide in from right
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rolam" className="py-20 bg-massage-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef}>
            <img src="/images/zoli.png" alt="Masszőr" className="w-full rounded-2xl shadow-lg" />
          </div>
          <div ref={contentRef}>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-massage-text mb-6">
              Rólam
            </h2>
            <p className="text-lg font-medium text-massage-green mb-4">
              Üdvözlöm a Bástya Masszázs weboldalán!
            </p>
            <div className="space-y-4 text-massage-text leading-relaxed">
              <p>
                A masszázst a katonaság mellett végzem, ahol több mint 22 év szolgálati
                tapasztalatot szereztem. A katonai pálya megtanított arra, milyen komoly terhelésnek
                lehet kitéve az emberi test és elme – legyen szó fizikai igénybevételről, stresszről
                vagy a folyamatos teljesítménykényszerről.
              </p>
              <p>
                Hobbi sportolóként számos mozgásformát kipróbáltam, így saját tapasztalatból ismerem
                az edzés, a túlterhelés és a nem megfelelő regeneráció következményeit. Képesítéseim
                között szerepel a svédmasszázs, sportmasszázs, valamint a keleti gyógyászati
                módszerek, mint a köpölyözés.
              </p>
              <p>
                Célom, hogy masszázsaimmal segítsem vendégeimet a regenerációban, az
                izomfeszültségek oldásában, a fájdalom csökkentésében és a teljesítmény javításában.
                Minden kezelést egyénileg alakítok ki, figyelembe véve a vendég egyedi igényeit és
                állapotát.
              </p>
              <p>
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
