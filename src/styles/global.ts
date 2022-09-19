import { createGlobalStyle } from 'styled-components';
// import theme from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  /* html {
    font-size: 100%;

    @media (max-width: 1500px) {
      font-size: 90%;
    }
  } */

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
    font: 400 16px Roleway, sans-serif;
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
    /* line-height: 4.44rem; */
  }

  /* h2 {
    color:  ${props => props.theme.colors.primaryText};
    font-family: 'DM Sans', sans-serif;
    font-weight: 900;
    font-size: 2.75rem;
    line-height: 3rem;
  }

  h3 {
    color:  ${props => props.theme.colors.primary};
    font-family: 'DM Sans', sans-serif;
    font-weight: 900;
    font-size: 2.125rem;
  } */

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
`;
