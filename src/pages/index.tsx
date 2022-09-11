import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from '../components/Header';
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
      <main />
    </>
  );
}
