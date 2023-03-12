/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowUp } from 'react-icons/fa';
import { Header } from '../components/Header/Header';
import { GalleryView } from '../components/GalleryView/GalleryView';

import { Footer } from '../components/Footer/Footer';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1500
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

    router.push('/gallery');
  };

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
