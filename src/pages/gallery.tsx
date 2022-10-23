import { useEffect } from 'react';
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
      <Header />
      <main>
        <GalleryView />
      </main>
      <Footer />
    </>
  );
}
