/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container } from './styles';

export const Header = () => (
  <Container data-aos="fade-down">
    <div className="logo">
      <img src="/images/logo.png" alt="Logo" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className="menu-button-container" htmlFor="menu-toggle">
      <div className="menu-button" />
    </label>
    <ul className="menu">
      <li>
        <a href="features">Início</a>
      </li>
      <li>
        <a href="pricing">Sobre</a>
      </li>
      <li>
        <a href="services">Serviços</a>
      </li>
      <li>
        <a href="partners">Como funciona</a>
      </li>
      <li id="last-bottom">
        <a href="contact">Contato</a>
      </li>
    </ul>
  </Container>
);
