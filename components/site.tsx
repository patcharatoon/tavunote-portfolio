import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

export default function Site() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="aurora overflow-hidden">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      <div>
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
