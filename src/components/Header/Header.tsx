/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { ContainerHeader, Animation } from './Header.styles';

export function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <Animation data-aos="fade-down">
      <ContainerHeader isActiveMenu={isActiveMenu}>
        <div className="logo">
          <img src="/images/logos/logo.png" alt="Logo" />
        </div>
        <input
          onClick={() => setIsActiveMenu(!isActiveMenu)}
          id="menu-toggle"
          type="checkbox"
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div
            // onClick={() => setIsActiveMenu(!isActiveMenu)}
            className="menu-button"
          />
        </label>
        <ul className="menu">
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
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
      </ContainerHeader>
    </Animation>
  );
}
