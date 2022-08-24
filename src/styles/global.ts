import { darken, lighten } from 'polished';
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
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font: 400 16px Roleway, sans-serif;
  }


  input, button {
    font-family: 'Roleway', sans-serif;
    font-size: 1.32rem;
  }

  button {
    font-size: 1rem;
    font-weight: 800;
    border: none;
    font-family: Raleway, sans-serif;
    cursor: pointer;
    background: transparent;
  }

  h1 {
    color:  ${props => props.theme.colors.text};
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    font-size: 3.69rem;
    line-height: 4.44rem;
  }

  h2 {
    color:  ${props => props.theme.colors.text};
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    font-size: 2.75rem;
    line-height: 3rem;
  }

  h3 {
    color:  ${props => props.theme.colors.primary};
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 2.125rem;
  }

  img {
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    color:  ${props => props.theme.colors.text};
    text-decoration: none;
  }

  button.contained {
    font-family: Raleway, sans-serif;
    font-size: 1.312rem;
    font-weight: 900;

    padding: 1.25rem 1.8rem;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
    transition: background 500ms;
  }

  button.contained:hover {
      background-color: ${lighten(0.1, theme.colors.secondary)};
  }

  button.outlined {
    font-family: Raleway, sans-serif;
    font-size: 1.312rem;
    font-weight: 900;

    padding: 1.125rem 1.8rem;
    color: ${theme.colors.secondary};
    border: 2px solid ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    transition: background 400ms;
  }

  button.outlined:hover {
    background-color: ${lighten(0.1, theme.colors.secondary)};
    border-color: ${lighten(0.1, theme.colors.secondary)};;
    color: ${theme.colors.primary};
  }

  button.contained-light {
    font-family: Raleway, sans-serif;
    font-size: 1.312rem;
    font-weight: 900;

    padding: 1.25rem 1.8rem;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    transition: background 500ms;
  }

  button.contained-light:hover {
    background-color: ${darken(0.2, theme.colors.primary)};
  }

  p {
    color: ${props => props.theme.colors.text};
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.187rem;
    line-height: 1.625rem;
  }

`;
