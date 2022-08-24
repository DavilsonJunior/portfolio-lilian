import React from 'react';

import { Container } from './styles';

const Hero: React.FC = () => (
  <Container data-aos="fade-up">
    <div className="hero">
      <h1>
        Create Stunning {'\n'}
        Email Campaigns
      </h1>

      <div className="content">
        <p>
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>

        <div className="button-group">
          <button className="contained" type="button">
            TRY NOW
          </button>
          <button className="outlined" type="button">
            GET A DEMO
          </button>
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
