import React from 'react';

import { Container } from './styles';

const GetStarted: React.FC = () => (
  <Container data-aos="zoom-in">
    <h1>Get started today!</h1>
    <button className="contained-light" type="button">
      PICK A PLAN
    </button>
  </Container>
);

export default GetStarted;
