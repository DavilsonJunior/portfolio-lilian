import styled from 'styled-components';

import backgroundImg from '../../assets/background-green.png';
import videoImg from '../../assets/video.png';
import theme from '../../styles/theme';

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 4rem auto;
  padding: 0.6rem;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > section.video {
    max-width: 59rem;
    width: 100%;
    margin: auto;
    height: 33.187rem;
    background: url(${videoImg}) no-repeat center;
    background-size: contain;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.colors.primary};
    }

    button.contained-light {
      margin-top: 5rem;
    }
  }

  > section.works {
    max-width: 68.75rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    > article {
      max-width: 20rem;
      height: 29rem;
    }

    > article + article {
      margin-top: 12rem;
    }

    > article + article + article {
      margin-top: 17rem;
    }

    > article.extra-description {
      width: 22.81rem;

      p {
        margin-top: 1.8rem;
      }
    }
  }

  > section.case-studio {
    max-width: 68.75rem;
    width: 100%;
    height: 14.93rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (max-width: 900px) {
    > section.video {
      h1 {
        font-size: 2.38rem;
      }

      button.contained-light {
        font-size: 0.813rem;
        margin-top: 2rem;
        padding: 1rem 1.55rem;
      }
    }

    > section.works {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      > article {
        width: 13rem;
        height: 20rem;
      }

      > article + article {
        margin-top: 8rem;
      }

      > article + article + article {
        margin-top: 13rem;
      }

      > article.extra-description {
        width: 14.5rem;
        height: 18rem;

        h2 {
          font-size: 1.75rem;
          line-height: 1.93rem;
        }

        p {
          margin-top: 1.2rem;
          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }

    > section.case-studio {
      max-width: 48rem;
      height: 9.812rem;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      h3 {
        font-size: 1.375rem;
      }

      p {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    > section.video {
      height: 20rem;
    }

    > section.works {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;

      > article {
        max-width: 20rem;
        width: 100%;
        height: auto;
      }

      > article + article {
        margin-top: 2rem;
        margin-left: 30%;
      }

      > article + article + article {
        margin-top: 2rem;
        margin-left: 0;
      }

      > article.extra-description {
        max-width: 20rem;
        width: 100%;
        height: auto;
      }
    }

    > section.case-studio {
      max-width: 48rem;
      height: 100vh;

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;

      h3 {
        font-size: 1.375rem;
      }

      p {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }

  @media (max-width: 550px) {
    > section.video {
      height: 18rem;

      h1 {
        font-size: 1.375rem;
      }

      button.contained-light {
        font-size: 0.375rem;
        margin-top: 1rem;
        padding: 0.65rem 1.2rem;
      }
    }

    > section.works {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0;
      margin-top: 4rem;

      > article {
        max-width: 15rem;
        width: 100%;
        height: auto;
      }

      > article + article {
        margin-top: 2rem;
        margin-left: 20%;
      }

      > article + article + article {
        margin-top: 2rem;
        margin-left: 0;
      }

      > article.extra-description {
        max-width: 20rem;
        width: 100%;
        height: auto;

        h2 {
          font-size: 1.75rem;
          line-height: 1.93rem;
        }

        p {
          margin-top: 1.2rem;
          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }

    > section.case-studio {
      height: auto;

      gap: 2rem;
    }
  }
`;
