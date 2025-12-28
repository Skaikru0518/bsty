import AboutSection from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navigation from '@/components/navigation';
import ServicesSection from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
