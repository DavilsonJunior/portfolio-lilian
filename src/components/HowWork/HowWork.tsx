import React from 'react';

import { HowWorkTopic } from '../HowWorkTopic/HowWorkTopic';
import { howWorkTopics } from './HowWork.values';

import { Animation, HowWorkContainer, HowWorkInfo } from './HowWork.styles';

export function HowWork() {
  return (
    <Animation id="howwork" data-aos="fade-up">
      <HowWorkContainer className="hero">
        <HowWorkInfo>
          <h1>Como funciona?</h1>

          <p>
            “Para mim, a organização traz economia de tempo, muito mais
            qualidade de vida e mais funcionalidade com respeito à
            individualidade de cada um e de cada casa. Por isso, sempre falo que
            a organização é personalizada! A organização traz mais praticidade e
            bem-estar no nosso dia-a-dia.” (Lilian Azevedo){' '}
          </p>

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
