/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { ContainerHeader, Animation } from './Header.styles';

export function Header() {
  const router = useRouter();
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const navigateToContent = (route: string) => {
    router.push(route);
  };

  return (
    <Animation id="inicio" data-aos="fade-down">
      <ContainerHeader isActiveMenu={isActiveMenu}>
        <button onClick={() => router.push('/')} type="button" className="logo">
          <img src="/images/logos/logo.png" alt="Logo" />
        </button>
        <input
          onClick={() => setIsActiveMenu(!isActiveMenu)}
          id="menu-toggle"
          type="checkbox"
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        <ul className="menu">
          <button type="button" onClick={() => navigateToContent('#inicio')}>
            <div className="link">Início</div>
          </button>
          <button type="button" onClick={() => navigateToContent('#servicos')}>
            <div className="link">Serviços</div>
          </button>
          <button
            type="button"
            onClick={() => navigateToContent('#como-funciona')}
          >
            <div className="link">Como funciona</div>
          </button>
          <button type="button" onClick={() => navigateToContent('#sobre')}>
            <div className="link">Sobre mim</div>
          </button>
          <button type="button" onClick={() => navigateToContent('#fotos')}>
            <div className="link">Fotos</div>
          </button>
          <button type="button" onClick={() => navigateToContent('#contato')}>
            <div className="link">Contato</div>
          </button>
        </ul>
      </ContainerHeader>
    </Animation>
  );
}
