import styled from 'styled-components';
import { lighten } from 'polished';
import theme from '../../styles/theme';

export const Container = styled.header`
  max-width: 1400px;
  padding: 1.85rem;
  margin: auto;
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  div.logo {
    display: flex;
    align-items: center;

    img {
      width: 8.125rem;
    }

    span {
      font-size: 2.2rem;
      font-family: Raleway, sans-serif;
      font-weight: 900;
      line-height: 2.56rem;
      margin-left: -1.2rem;
    }
  }

  @media (max-width: 1000px) {
    div.logo {
      img {
        width: 5.25rem;
      }

      span {
        font-size: 1.375rem;
        font-family: Raleway, sans-serif;
        font-weight: 900;
        margin-left: -1.2rem;
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0.312rem;
  }
`;

export const Menu = styled.nav`
  max-width: 680px;
  padding: 0.625rem;

  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 0.313rem;
      border-bottom: 3px solid ${theme.colors.secondary};
      transition: color 2s;

      a:hover {
        color: ${lighten(0.3, theme.colors.text)};
      }
    }

    li + li {
      margin-left: 1.75rem;
    }

    li > a {
      font-family: Raleway, sans-serif;
      font-size: 1.07rem;
      font-weight: 800;
      line-height: 1.25rem;
    }
  }

  button.contained {
    font-family: Raleway, sans-serif;
    font-size: 1.07rem;
    font-weight: 800;
    line-height: 1.25rem;

    padding: 0.625rem 1.25rem;
    margin-left: 2rem;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }

  @media (max-width: 1000px) {
    ul {
      li > a {
        font-size: 0.688rem;
      }
    }

    button.contained {
      font-size: 0.688rem;
    }
  }

  @media (max-width: 740px) {
    ul {
      display: none;
    }

    button.contained {
      margin-left: 0;
    }
  }
`;
