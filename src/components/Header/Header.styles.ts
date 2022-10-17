import styled from 'styled-components';
import theme from '../../styles/theme';
import { MenuProps } from './Header.types';

export const Animation = styled.div``;

export const ContainerHeader = styled.header<MenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.primaryText};

  max-width: 1500px;
  margin: auto;

  height: 90px;
  /* padding: 1em; */
  padding: 20px;

  border-bottom: 2px solid ${theme.colors.borderBottom};

  margin-bottom: ${props => (props.isActiveMenu ? 280 : 0)}px;

  div.logo {
    display: flex;
    align-items: center;

    img {
      width: 150px;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;

    a {
      color: ${theme.colors.primaryText};
      height: 90px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;
    }

    a:hover {
      color: ${theme.colors.primary};
      font-weight: 500;
      border-bottom: 2px solid ${theme.colors.primary};
    }
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: ${theme.colors.primary};
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    /* background: rgba(255, 255, 255, 0); */
    background: transparent;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: ${theme.breakpoints.smToMd}) {
    border-bottom: 1px solid ${theme.colors.borderBottom};

    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 90px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid ${theme.colors.borderHeader};
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .menu li > a {
      display: block;
    }

    #menu-toggle:checked ~ .menu li:last-of-type {
      border-bottom: 2px solid ${theme.colors.borderHeader};
    }
    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      cursor: pointer;
      background-color: ${theme.colors.background};

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
