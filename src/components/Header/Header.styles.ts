import styled from 'styled-components';
import theme from '../../styles/theme';
import { MenuProps } from './Header.types';

export const Animation = styled.div`
  /* position: sticky;
  top: 0; */
  z-index: 999;
  background-color: ${theme.colors.background};
`;

export const ContainerHeader = styled.header<MenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.primaryText};

  max-width: 1500px;
  margin: auto;

  height: 150px;
  padding: 20px;

  /* border-bottom: 2px solid ${theme.colors.borderBottom}; */

  margin-bottom: ${props => (props.isActiveMenu ? 250 : 0)}px;

  button.logo {
    display: flex;
    align-items: center;

    img {
      width: 250px;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu > button {
    margin: 0 1rem;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    color: ${theme.colors.primaryText};

    div.link {
      color: ${theme.colors.primaryText};
      /* height: 150px; */
      display: flex;
      align-items: center;
      /* font-weight: 500; */
      /* border-bottom: 2px solid transparent; */
      line-height: 40px;
    }

    div.link:hover {
      color: ${theme.colors.primary};
      /* font-weight: 500; */
      /* border-bottom: 2px solid ${theme.colors.primary}; */
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

  @media (max-width: 900px) {
    /* border-bottom: 1px solid ${theme.colors.borderBottom}; */

    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 150px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu button {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu button {
      border: 1px solid ${theme.colors.borderHeader};
      height: 2.5em;
      /* padding: 0.5em; */
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .menu button > a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      text-align: center;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    #menu-toggle:checked ~ .menu li:last-of-type {
      /* border-bottom: 2px solid ${theme.colors.borderHeader}; */
    }
    .menu > button {
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

  @media (max-width: ${theme.breakpoints.sm}) {
    div.logo {
      img {
        width: 200px;
      }
    }
  }
`;
