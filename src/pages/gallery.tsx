import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from '../components/Header/Header';
import { GalleryView } from '../components/GalleryView/GalleryView';

import { Footer } from '../components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
      <Head>
        <title>Lílian Azevedo - Personal Organizer</title>
      </Head>
      <Header />
      <main>
        <GalleryView />
      </main>
      <Footer />
    </>
  );
}
