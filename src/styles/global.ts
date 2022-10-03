import { createGlobalStyle } from 'styled-components';

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
`;
