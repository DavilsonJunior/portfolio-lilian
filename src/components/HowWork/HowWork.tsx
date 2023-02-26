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
    <Animation id="como-funciona">
      <HowWorkInfoTitle>
        <h1>Como funciona</h1>
      </HowWorkInfoTitle>
      <HowWorkContainer className="hero" data-aos="fade-up">
        <HowWorkInfo>
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
