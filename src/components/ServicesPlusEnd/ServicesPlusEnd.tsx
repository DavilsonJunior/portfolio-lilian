import React from 'react';

import { ServicesTopic } from '../ServicesTopic/ServicesTopic';
import { services } from './ServicesPlusEnd.values';

import {
  Animation,
  ServicesPlusEndContainer,
  ServicesPlusEndInfo,
  ServicesPlusEndImage
} from './ServicesPlusEnd.styles';

export function ServicesPlusEnd() {
  return (
    <Animation id="services" data-aos="fade-up">
      <ServicesPlusEndContainer className="hero">
        <ServicesPlusEndImage>
          <img
            className="image"
            src="/images/backgrounds/background-services-end.jpeg"
            alt="background hero"
          />
        </ServicesPlusEndImage>
        <ServicesPlusEndInfo>
          <div className="topics">
            {services.map(service => (
              <ServicesTopic
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </ServicesPlusEndInfo>
      </ServicesPlusEndContainer>
    </Animation>
  );
}
