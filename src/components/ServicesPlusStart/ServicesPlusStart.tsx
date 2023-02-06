import React from 'react';

import { ServicesTopic } from '../ServicesTopic/ServicesTopic';
import { services } from './ServicesPlusStart.values';

import {
  Animation,
  ServicesPlusStartContainer,
  ServicesPlusStartInfo,
  ServicesPlusStartImage,
  ServicesPlusStartInfoTitle
} from './ServicesPlusStart.styles';

export function ServicesPlusStart() {
  return (
    <Animation id="services" data-aos="fade-up">
      <ServicesPlusStartInfoTitle>
        <h1>Outros serviços que ofereço</h1>
      </ServicesPlusStartInfoTitle>
      <ServicesPlusStartContainer className="hero">
        <ServicesPlusStartInfo>
          {/* <h1>Outros serviços que ofereço</h1> */}

          <div className="topics">
            {services.map(service => (
              <ServicesTopic
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </ServicesPlusStartInfo>
        <ServicesPlusStartImage>
          <img
            className="image"
            src="/images/backgrounds/background-services-start.jpeg"
            alt="background hero"
          />
        </ServicesPlusStartImage>
      </ServicesPlusStartContainer>
    </Animation>
  );
}
