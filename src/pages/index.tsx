import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Services } from '../components/Services/Services';
import { ServicesPlusStart } from '../components/ServicesPlusStart/ServicesPlusStart';
import { ServicesPlusEnd } from '../components/ServicesPlusEnd/ServicesPlusEnd';
import { HowWork } from '../components/HowWork/HowWork';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServicesPlusStart />
        <ServicesPlusEnd />
        <HowWork />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
