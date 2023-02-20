import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
    font: 400 16px Roleway, sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
  }

  input, button {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.32rem;
  }

  button {
    font-size: 1rem;
    font-weight: 800;
    border: none;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    background: transparent;
  }

  h1 {
    color:  ${props => props.theme.colors.primaryText};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 364px;
  }

  img {
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    color:  ${props => props.theme.colors.primaryText};
    text-decoration: none;
  }

  .button-scroll {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};

    position: fixed;
    right: 20px;
    bottom: 20px;

    display: none;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    svg {
      color: ${theme.colors.background};
      font-size: 24px;
      font-weight: bold;
    }
  }

  .visibility {
    display: flex;
  }
`;
