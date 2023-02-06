import React from 'react';

import { HowWorkTopic } from '../HowWorkTopic/HowWorkTopic';
import { howWorkTopics } from './HowWork.values';

import {
  Animation,
  HowWorkContainer,
  HowWorkInfo,
  HowWorkInfoTitle
} from './HowWork.styles';

export function HowWork() {
  return (
    <Animation id="howwork">
      <HowWorkInfoTitle>
        <h1>Como funciona</h1>
      </HowWorkInfoTitle>
      <HowWorkContainer className="hero" data-aos="fade-up">
        <HowWorkInfo>
          {/* <h1>Como funciona</h1> */}
          {/* <p>
            “Para mim, a organização traz economia de tempo, muito mais
            qualidade de vida e mais funcionalidade com respeito à
            individualidade de cada um e de cada casa. Por isso, sempre falo que
            a organização é personalizada!” (Lílian Azevedo){' '}
          </p> */}

          <div className="topics">
            {howWorkTopics.map(howWork => (
              <HowWorkTopic
                key={howWork.id}
                number={howWork.id}
                title={howWork.title}
                description={howWork.description}
              />
            ))}
          </div>
        </HowWorkInfo>
      </HowWorkContainer>
    </Animation>
  );
}
