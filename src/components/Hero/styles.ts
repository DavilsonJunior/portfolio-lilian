import styled from 'styled-components';

import HeroImg from '../../assets/hero.jpg';

export const Container = styled.section`
  max-width: 1100px;
  margin: 4rem auto;
  background: url(${HeroImg}) no-repeat right;
  background-size: contain;
  padding: 1.78rem;

  div.hero {
    max-width: 30.625rem;

    div.content {
      width: 27.88rem;

      div.button-group,
      p {
        margin-top: 1.88rem;
      }

      p {
        color: ${props => props.theme.colors.text};
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 1.187rem;
        line-height: 1.625rem;
      }

      div.button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button.contained {
          padding: 1.25rem 2.6rem;
        }

        button.outlined {
          padding: 1.125rem 1.8rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    div.hero {
      width: 20rem;
      h1 {
        font-size: 2.38rem;
      }

      div.content {
        width: 17.6rem;

        div.button-group,
        p {
          margin-top: 1.88rem;
        }

        p {
          font-size: 0.875rem;
          line-height: 1rem;
        }

        div.button-group {
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            font-size: 0.813rem;
          }

          button.contained {
            padding: 0.84rem 2rem;
          }

          button.outlined {
            padding: 0.84rem 1.3rem;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    display: flex;
    margin: 0 auto;
    padding: 0rem 1rem;
    background-position: 100% 15%;

    div.hero h1 {
      font-size: 2.25rem;
    }

    div.hero {
      width: 100%;

      div.content {
        width: 100%;
        padding-top: 5rem;
      }
    }
  }

  @media (max-width: 335px) {
    background-position: 100% 30%;

    div.hero div.content {
      padding-top: 0;
    }
  }
`;
