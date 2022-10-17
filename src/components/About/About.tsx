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
            da organização e que é membro da NAPO (National Association of
            Professional Organizers) uma das maiores associações de
            organizadores profissionais do mundo.
          </p>
          <p>
            Além do curso de Personal Organizer, tenho especialização em
            Treinamento de empregadas, em Organização de Mudanças Residenciais,
            em Organização de Home Offices e em Organização Baby.
          </p>
          <p>
            Tenho usado minhas habilidades como Personal Organizer Certificada
            para organizar ambientes de maneira a facilitar a vida das pessoas.
          </p>
          <p>
            Meus serviços estão disponíveis na região do estado de São Paulo,
            principalmente ao redor de São Carlos, Araraquara e Ribeirão Preto,
            mas tenho possibilidade de viajar para outros locais.
          </p>
          <p>
            Também faço consultorias online de organização, e nesse caso, quem
            coloca a mão na massa é você com as minhas orientações. Assim como a
            organização feita por mim, a consultoria é personalizada para cada
            cliente, de acordo com o seu objetivo.
          </p>
        </AboutInfo>
      </AboutContainer>
    </Animation>
  );
}
