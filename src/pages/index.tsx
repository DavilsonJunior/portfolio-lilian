import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from '../components/About';
import Brands from '../components/Brands';
import CompanyInformation from '../components/CompanyInformation';
import Footer from '../components/Footer';
import Form from '../components/Form';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Hero from '../components/Hero';

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
        <CompanyInformation />
        <Form />
        <Brands />
        <GetStarted />
        <About />
        <Footer />
      </main>
    </>
  );
}
