import React from 'react';
import Image from 'next/image';

import {
  Animation,
  ServicesContainer,
  ServicesInfo,
  ServicesExperian
} from './Services.styles';
import { services } from './Services.values';

export function Services() {
  return (
    <Animation id="services" data-aos="fade-up">
      <ServicesContainer className="hero">
        <ServicesInfo>
          <h1>Serviços</h1>
          <p>
            Realizamos uma organização personalizada da sua casa! Cada
            organização é única e planejada para funcionar de forma prática para
            você e toda a sua família. Esta organização pode ser feita no
            closet, cozinha, louceiro, banheiro, sala e onde mais precisar. O
            essencial é que participamos da organização do início ao fim,
            auxiliando na triagem e descarte adequados, a realocação de cada
            peça, acessório ou objeto, e, também, treinamos sua funcionária para
            que a organização se mantenha.
          </p>
        </ServicesInfo>
        <ServicesExperian>
          {services.map(service => (
            <div key={service.id} className="card">
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
