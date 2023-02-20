import React from 'react';

import { Animation, HeroContainer, HeroInfo, HeroImage } from './Hero.styles';

export function Hero() {
  return (
    <Animation id="hero" data-aos="fade-up">
      <HeroContainer className="hero">
        <HeroInfo>
          <h1>
            A organização traz mais praticidade e bem-estar para o seu
            dia-a-dia.
          </h1>
          <h2>
            Eu vou lhe mostrar como uma Personal Organizer pode fazer a
            diferença na organização da sua casa, melhorando o seu dia-a-dia
            através do bom aproveitamento dos espaços físicos de sua casa.
          </h2>
          <button type="button">
            <a
              href="https://api.whatsapp.com/send?phone=5516996469902"
              target="_blank"
              rel="noreferrer"
            >
              Entre em contato
            </a>
          </button>
        </HeroInfo>
        <HeroImage>
          <img
            className="image"
            src="/images/backgrounds/background-hero.jpg"
            alt="background hero"
          />
        </HeroImage>
      </HeroContainer>
      {/* <ButtonToTop>
        <FaArrowUp />
      </ButtonToTop> */}
    </Animation>
  );
}
