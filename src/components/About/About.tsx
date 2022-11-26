import React from 'react';

import {
  Animation,
  AboutContainer,
  AboutInfo,
  AboutImage
} from './About.styles';

export function About() {
  return (
    <Animation id="about" data-aos="fade-right">
      <AboutContainer className="hero">
        <AboutImage>
          <img
            className="image"
            src="/images/backgrounds/background-profile.jpg"
            alt="background hero"
          />
        </AboutImage>
        <AboutInfo>
          <h1>Sobre mim</h1>
          <p>
            Sou Lílian Azevedo, Personal Organizer formada pela OZ! Organize sua
            Vida, que é a empresa pioneira no setor de formação de profissionais
            da organização e membro da NAPO, uma das maiores associações de
            profissionais de organização e produtividade do mundo.
          </p>
          <p>
            Além do curso de Personal Organizer, tenho especializações, também
            pela OZ! Organize sua Vida, em Treinamento de empregadas,
            Organização de Mudanças Residenciais, Organização de Home Offices e
            Organização Baby.
          </p>
          <p>
            Tenho usado minha paixão pela organização, meus conhecimentos e
            minhas habilidades como Personal Organizer certificada para
            organizar ambientes de maneira a facilitar a vida das pessoas e
            melhorar a sua qualidade de vida
          </p>
          <p>
            Meus serviços estão disponíveis na região do estado de São Paulo,
            principalmente ao redor de São Carlos, Araraquara e Ribeirão Preto,
            mas tenho possibilidade de viajar para outros locais.
          </p>
          <p>
            Também faço consultorias online de organização, e nesse caso, quem
            coloca a mão na massa é você de acordo com as minhas orientações.
            Assim como a organização presencial feita por mim, a consultoria
            online é personalizada, de acordo com o seu desejo e objetivo.
          </p>
        </AboutInfo>
      </AboutContainer>
    </Animation>
  );
}
