import React from 'react';
// import Image from 'next/image';

import { Animation, HeroContainer, HeroInfo, HeroImage } from './Hero.styles';

export function Hero() {
  return (
    <Animation id="hero" data-aos="fade-up">
      <HeroContainer className="hero">
        <HeroInfo>
          <h1>Ambiente agradável para todos os gostos</h1>
          <h2>
            Se você esta buscando uma forma de organizar sua casa ou ambiente de
            trabalho de uma forma mais organizada eu posso te ajudar.
          </h2>
          <button type="button">Entre em contato</button>
        </HeroInfo>
        <HeroImage>
          <img
            className="image"
            src="/images/backgrounds/background-hero.jpg"
            alt="background hero"
          />
        </HeroImage>
      </HeroContainer>
    </Animation>
  );
}
