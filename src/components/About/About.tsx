import React from 'react';

import {
  Animation,
  AboutContainer,
  AboutInfo,
  AboutImage,
  AboutInfoTitle
} from './About.styles';

export function About() {
  return (
    <>
      <Animation id="sobre" data-aos="fade-right">
        <AboutInfoTitle>
          <h1>Sobre mim</h1>
        </AboutInfoTitle>

        <AboutContainer className="hero">
          <AboutImage>
            <img
              className="image"
              src="/images/backgrounds/background-profile.jpg"
              alt="background hero"
            />
          </AboutImage>
          <AboutInfo>
            <p>
              Olá, meu nome é Lílian Azevedo, sou Personal Organizer formada
              pela OZ! Organize sua Vida, que é a empresa pioneira no setor de
              formação de profissionais da organização e membro da NAPO, uma das
              maiores associações de profissionais de organização e
              produtividade do mundo.
            </p>
            <p>
              Sou graduada em Engenharia de Produção, mas meu interesse pela
              organização sempre falou mais alto. Sempre fui organizada, gosto
              das minhas coisas arrumadas e limpas e sempre gostei de ajudar
              familiares e amigos a organizarem suas coisas. Quando descobri que
              era possível trabalhar como organizadora profissional, ou melhor,
              como Personal Organizer, decidi me dedicar a essa profissão por
              completo. Hoje, trabalhando com organização, me sinto
              profissionalmente realizada e muito feliz em poder ajudar tantas
              pessoas e famílias.
            </p>
            <p>
              Por isso, tenho usado toda essa minha paixão, meus conhecimentos e
              minhas habilidades como Personal Organizer certificada para
              organizar ambientes de maneira a facilitar a vida das pessoas e
              melhorar a sua qualidade de vida. A organização que realizo é
              personalizada e adaptada à rotina e à necessidade de cada pessoa e
              família.
            </p>
            <p>
              Atualmente, moro e atendo em São Carlos (SP) e nas cidades
              próximas, como Rio Claro, Limeira, Araraquara e Ribeirão Preto, e
              tenho possibilidade de viajar para outros locais.
            </p>
          </AboutInfo>
        </AboutContainer>
      </Animation>
      <span id="fotos" />
    </>
  );
}
