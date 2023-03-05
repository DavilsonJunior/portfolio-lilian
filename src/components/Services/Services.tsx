import React from 'react';
import Image from 'next/image';

import {
  Animation,
  ServicesContainer,
  ServicesInfo,
  ServicesExperian,
  ServicesInfoTitle,
  ServicesClientInfo,
  ServicesContent,
  ClientInfoContainer,
  ClientInfoBottomContainer
} from './Services.styles';
import { services } from './Services.values';

export function Services() {
  return (
    <Animation id="servicos">
      <ServicesContainer className="hero">
        <ServicesInfoTitle>
          <h1>Serviços que ofereço</h1>
        </ServicesInfoTitle>

        <ServicesInfo data-aos="fade-up">
          <div className="services-item">
            <img
              src="/images/icons/icon-arrow-right-circle.svg"
              alt="arrow circle icon"
            />
            <ServicesContent>
              <strong className="subtitle">
                Organização personalizada da sua casa
              </strong>
              <ServicesClientInfo data-aos="fade-up">
                <p>
                  Cada organização é única e planejada para funcionar de forma
                  prática para você e a sua família. Esta organização pode ser
                  feita na sala, quarto, closet, banheiro, home office e onde
                  mais precisar. O essencial é que eu realizo a organização do
                  início ao fim, auxiliando no descarte adequado, fazendo a
                  categorização e a realocação de cada objeto no espaço correto,
                  e, também, a identificação dos espaços com as etiquetas.
                </p>

                <ClientInfoContainer>
                  <div className="client-info">
                    “Para mim, a organização traz economia de tempo, muito mais
                    qualidade de vida e funcionalidade para sua casa, devendo
                    respeitar a individualidade de cada pessoa e família. Por
                    isso, sempre falo que a organização deve ser personalizada!”
                    <br />
                    Lílian Azevedo
                    <img src="/images/logos/lavanda.png" alt="lavanda" />
                  </div>
                </ClientInfoContainer>
              </ServicesClientInfo>
            </ServicesContent>
          </div>
        </ServicesInfo>

        <ServicesExperian>
          {services.map(service => (
            <div key={service.id} className="card" data-aos="zoom-in">
              <Image
                width="60px"
                height="60px"
                src={service.icon}
                alt={`icon ${service.title}`}
              />

              <span>{service.title}</span>
              <p>{service.description}</p>
            </div>
          ))}
        </ServicesExperian>
        <ClientInfoBottomContainer>
          <div className="client-info">
            “Para mim, a organização traz economia de tempo, muito mais
            qualidade de vida e funcionalidade para sua casa, devendo respeitar
            a individualidade de cada pessoa e família. Por isso, sempre falo
            que a organização deve ser personalizada!” <br />
            Lílian Azevedo
            <img src="/images/logos/lavanda.png" alt="lavanda" />
          </div>
        </ClientInfoBottomContainer>
      </ServicesContainer>
    </Animation>
  );
}
