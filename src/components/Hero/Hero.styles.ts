import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  /* padding: 1em; */
  /* margin-top: 60px; */
  margin: 2.2rem 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0rem 0;
  }
`;

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  padding: 0 20px;

  max-width: 1500px;
  height: 400px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`;

export const HeroInfo = styled.div`
  max-width: 550px;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 40px;
    font-weight: 700;
    /* max-width: 550px; */
    text-align: justify;
  }

  h2 {
    color: ${theme.colors.infoText};
    font-size: 1.375rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    margin: 28px 0;
    /* max-width: 550px; */
    text-align: justify;
  }

  button a {
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
    max-width: 480px;

    h1 {
      font-size: 36px;
      /* max-width: 450px; */
    }

    h2 {
      font-size: 18px;
      /* max-width: 480px; */
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin-top: 0px;
    max-width: 430px;

    h1 {
      font-size: 32px;
      /* max-width: 420px; */
    }

    h2 {
      font-size: 16px;
      margin: 22px 0;
      /* max-width: 430px; */
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    /* margin-bottom: 60px; */
    margin-bottom: 20px;
    max-width: 540px;

    h1 {
      margin: auto;
      font-size: 40px;
      /* max-width: 520px; */
      text-align: center;
      margin-top: 30px;
    }

    h2 {
      font-size: 22px;
      margin: 22px 0;
      /* max-width: 540px; */
    }

    button {
      margin-top: 20px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 540px;
    h1 {
      font-size: 36px;
      /* max-width: 520px; */
      text-align: center;
    }

    h2 {
      font-size: 18px;
      margin: 22px 0;
      /* max-width: 540px; */
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    max-width: 400px;
    h1 {
      font-size: 30px;
      /* max-width: 350px; */
      text-align: center;
    }

    h2 {
      font-size: 16px;
      margin: 16px 0;
      /* max-width: 400px; */
    }
  }
`;

export const HeroImage = styled.div`
  padding: 0 30px;
  height: auto;

  img.image {
    width: 100%;
    height: 420px;
    max-width: 700px;
    max-height: 524px;
    box-shadow: 2rem -2rem ${theme.colors.boxShadowPurple};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    img.image {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 2.5rem;

    img.image {
      max-width: 700px;
      max-height: 524px;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    img.image {
      margin-right: 50px;
    }
  }
`;

// export const ButtonToTop = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: ${theme.colors.primary};

//   position: fixed;
//   right: 0;
//   bottom: 0;

//   svg {
//     color: white;
//     font-size: 24px;
//     font-weight: bold;
//   }
// `;
