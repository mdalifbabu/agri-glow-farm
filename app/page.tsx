import HeroSection from '@/app/components/HeroSection';
import ProductCategory from '@/app/components/ProductCategory';
import Testimonials from '@/app/components/Testimonials';
import Newsletter from '@/app/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategory />
      <Testimonials />
      <Newsletter />
    </>
  );
}