import { HeroSection } from '@/components/hero-section';
import { FeaturesGrid } from '@/components/features/features-grid';
import SeoDashboard from '@/components/features/feature-showcase';
import Testimonials from '@/components/testimonials/testimonials-section';
import { PricingSection } from '@/components/pricing/pricing-section';
import { FooterSection } from '@/components/footer/footer-section';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <SeoDashboard/>
      <FeaturesGrid />
      <Testimonials />
      <PricingSection />
      <FooterSection />
    </main>
  );
}