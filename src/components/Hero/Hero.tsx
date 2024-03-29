import React from 'react';

import { Animation, HeroContainer, HeroInfo, HeroImage } from './Hero.styles';

export function Hero() {
  return (
    <Animation id="hero" data-aos="fade-up">
      <HeroContainer className="hero">
        <HeroInfo>
          <h1>
            A organização traz mais praticidade e bem-estar para o seu
            dia-a-dia!
          </h1>
          <h2>
            Ter a casa organizada faz toda a diferença na sua vida, pois o seu
            dia-a-dia se torna melhor através do bom aproveitamento dos espaços
            físicos.
          </h2>

          <button
            type="button"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5516996469902',
                '_blank'
              )
            }
          >
            Entre em contato
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
    </Animation>
  );
}
