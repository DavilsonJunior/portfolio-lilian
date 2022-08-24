import React from 'react';

import { Container } from './styles';

interface CaseStudyBannerProps {
  url: string;
  title: string;
  description: string;
}

const CaseStudyBanner: React.FC<CaseStudyBannerProps> = ({
  url,
  title,
  description
}) => (
  <Container url={url}>
    <h3>{title}</h3>
    <p>{description}</p>
  </Container>
);

export { CaseStudyBanner };
