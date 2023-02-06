import React from 'react';
import Image from 'next/image';

import {
  Animation,
  ServicesContainer,
  ServicesInfo,
  ServicesExperian,
  ServicesInfoTitle
} from './Services.styles';
import { services } from './Services.values';

export function Services() {
  return (
    <Animation id="services">
      <ServicesContainer className="hero">
        <ServicesInfoTitle>
          <h1>Serviços que ofereço</h1>
          <p className="subtitle">Organização personalizada da sua casa</p>
        </ServicesInfoTitle>

        <ServicesInfo data-aos="fade-up">
          {/* <h1>Serviços que ofereço</h1> */}

          <div className="services-item">
            <img
              src="/images/icons/icon-arrow-right-circle.svg"
              alt="arrow circle icon"
            />
            <p>
              Cada organização é única e planejada para funcionar de forma
              prática para você e toda a sua família. Esta organização pode ser
              feita no closet, cozinha, louceiro, banheiro, sala e onde mais
              precisar. O essencial é que participo da organização do início ao
              fim, auxiliando na triagem e descarte adequados, a realocação de
              cada peça, acessório ou objeto, e, também, treino sua funcionária
              para que a organização se mantenha.
            </p>
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
      </ServicesContainer>
    </Animation>
  );
}
