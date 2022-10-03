import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  padding: 1em;
  margin-top: 60px;
`;

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  max-width: 1500px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroInfo = styled.div`
  margin-top: 70px;

  h1 {
    color: ${theme.colors.primaryText};
    /* font-size: 36px; */
    font-size: 2.75rem;
    font-weight: 700;
    max-width: 500px;
  }

  h2 {
    color: ${theme.colors.infoText};
    /* font-size: 18px; */
    font-size: 1.375rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    margin: 28px 0;
    max-width: 560px;
  }

  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.buttonText};
    font-size: 16px;
    font-weight: 500;

    padding: 16px 32px;
    border-radius: 4px;
    transition: filter 400ms;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    margin-top: 50px;

    h1 {
      font-size: 36px;
      max-width: 450px;
    }

    h2 {
      font-size: 18px;
      max-width: 480px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin-top: 0px;

    h1 {
      font-size: 32px;
      max-width: 420px;
    }

    h2 {
      font-size: 16px;
      margin: 22px 0;
      max-width: 430px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;

    h1 {
      margin: auto;
      font-size: 40px;
      max-width: 520px;
      text-align: center;
    }

    h2 {
      font-size: 22px;
      margin: 22px 0;
      max-width: 540px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 36px;
      max-width: 520px;
      text-align: center;
    }

    h2 {
      font-size: 18px;
      margin: 22px 0;
      max-width: 540px;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 30px;
      max-width: 350px;
      text-align: center;
    }

    h2 {
      font-size: 16px;
      margin: 16px 0;
      max-width: 400px;
    }
  }
`;

export const HeroImage = styled.div`
  height: 405px;

  img {
    max-width: 606px;
    max-height: 430px;
  }

  img.image {
    margin-top: -380px;
    margin-left: -70px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    img {
      max-width: 676px;
      max-height: 400px;
    }

    img.image {
      margin-top: -370px;
      margin-left: -40px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    img {
      max-width: 606px;
      max-height: 330px;
    }

    img.image {
      margin-top: -370px;
      margin-left: -40px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    /* margin-top: 50px; */
    margin: 0px auto;
    padding: 30px;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    img.image {
      margin: auto;
      /* margin-top: -370px;
      margin-left: -60px; */
      margin-top: -550px;
      margin-left: -0px;
    }

    img.purple-hero {
      margin-left: -30px;
    }
  }

  /* @media (max-width: ${theme.breakpoints.sm}) {
    margin: 10px auto;
    padding: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    img.image {
      margin: auto;

      margin-top: -550px;
      margin-left: -20px;
    }
  } */
`;

// img.image {

//     /* margin-top: -370px;
//     margin-left: -60px; */

//   }
