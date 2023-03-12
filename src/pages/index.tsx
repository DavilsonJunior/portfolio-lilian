/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowUp } from 'react-icons/fa';
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
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 400
    });

    document.addEventListener('scroll', _ => {
      const windowTop = window.pageYOffset;
      const element = document.querySelector('#buttonScroll');

      if (element) {
        if (windowTop >= 200) {
          element?.classList.add('visibility');
        } else {
          element?.classList.remove('visibility');
        }
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Lílian Azevedo - Personal Organizer</title>
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
      <button
        type="button"
        id="buttonScroll"
        onClick={handleScrollTop}
        className="button-scroll"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
