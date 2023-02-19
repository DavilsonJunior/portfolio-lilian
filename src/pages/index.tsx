import { useEffect } from 'react';
import Head from 'next/head';
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
      duration: 400
    });

    document.addEventListener('scroll', e => {
      console.log(e.target);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Lílian Azevedo</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicesPlusStart />
        <ServicesPlusEnd />
        <HowWork />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
