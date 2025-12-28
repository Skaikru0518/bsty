'use client';

import Script from 'next/script';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-massage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-light text-massage-text mb-4">
            Vendégeim véleménye
          </h2>
          <p className="text-lg text-massage-text-muted max-w-2xl mx-auto leading-relaxed">
            Olvasd el, mit mondanak rólam a vendégeim
          </p>
        </div>

        {/* Elfsight Facebook Reviews Widget */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
        <div
          className="elfsight-app-e98fc5e6-1af1-40f5-9e51-a168efb91582"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
