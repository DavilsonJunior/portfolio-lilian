import React from 'react';

import lastKnightLogo from '../../assets/last-knight-logo.png';
import dragonEyeLogo from '../../assets/dragon-eye-logo.png';
import questLogo from '../../assets/quest-logo.png';
import radioTeeLogo from '../../assets/radio-tee-logo.png';
import gameCommerceLogo from '../../assets/game-commerce-logo.png';

import { Container } from './styles';

const Brands: React.FC = () => (
  <Container>
    <h2 data-aos="fade-down">All the best brands already use us.</h2>
    <div data-aos="fade-up" className="brand-logo">
      <img src={lastKnightLogo} alt="Last Knight logo" />
      <img src={dragonEyeLogo} alt="Dragon Eye logo" />
      <img src={questLogo} alt="Quest AI logo" />
      <img src={radioTeeLogo} alt="Radio Tee logo" />
      <img src={gameCommerceLogo} alt="GameCommerce logo" />
    </div>
  </Container>
);

export default Brands;
