import React from 'react';

import { ServicesTopic } from '../ServicesTopic/ServicesTopic';
import { services } from './ServicesPlusStart.values';

import {
  Animation,
  ServicesPlusStartContainer,
  ServicesPlusStartInfo,
  ServicesPlusStartImage
} from './ServicesPlusStart.styles';

export function ServicesPlusStart() {
  return (
    <Animation id="about" data-aos="fade-up">
      <ServicesPlusStartContainer className="hero">
        <ServicesPlusStartInfo>
          <h1>Um pouco mais sobre meu trabalho!</h1>

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
            src="/images/backgrounds/background-services-start.jpg"
            alt="background hero"
          />
        </ServicesPlusStartImage>
      </ServicesPlusStartContainer>
    </Animation>
  );
}
