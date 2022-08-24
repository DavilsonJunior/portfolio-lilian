import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Menu } from './styles';

const Header: React.FC = () => (
  <Container data-aos="fade-down">
    <div className="logo">
      <img src={logoImg} alt="Logo" />
      <span>NinjaMail</span>
    </div>
    <Menu>
      <ul>
        <li>
          <a href="Features">FEATURES</a>
        </li>
        <li>
          <a href="Pricing">PRICING</a>
        </li>
        <li>
          <a href="Services">SERVICES</a>
        </li>
        <li>
          <a href="Partners">PARTNERS</a>
        </li>
      </ul>
      <button className="contained" type="button">
        SIGN UP FREE
      </button>
    </Menu>
  </Container>
);

export default Header;
