import React from 'react';

import { Container } from './styles';

interface CardProps {
  url: string;
  alt: string;
  description: string;
  duration: number;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  url,
  alt,
  description,
  duration,
  buttonText
}) => (
  <Container data-aos="fade-up" data-aos-duration={duration}>
    <img src={url} alt={alt} />
    <div className="content">
      <p>{description}</p>
      <button type="button">{buttonText}</button>
    </div>
  </Container>
);

export { Card };
