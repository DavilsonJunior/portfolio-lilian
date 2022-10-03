import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  padding: 1em;
  margin: 150px 0;
`;

export const AboutContainer = styled.section`
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

export const AboutInfo = styled.div`
  margin-top: 70px;
  max-width: 610px;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.infoText};
    font-size: 18px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    margin: 28px 0;
    text-align: justify;
    max-width: 500px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    margin-top: 50px;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin-top: 0px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
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

    p {
      font-size: 20px;
      margin: 22px 0;
      max-width: 800px;
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

export const AboutImage = styled.div`
  height: 405px;

  img {
    max-width: 423px;
    max-height: 423px;
  }

  img.image {
    margin-top: -375px;
    margin-left: 50px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    img {
      max-width: 400px;
      max-height: 400px;
    }

    img.image {
      margin-top: -350px;
      margin-left: 40px;
    }
  }

  /* @media (max-width: ${theme.breakpoints.mdToLg}) {
    img {
      max-width: 360px;
      max-height: 400px;
    }

    img.image {
      margin-top: -350px;
      margin-left: 40px;
    }
  } */

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 0px auto 240px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 550px;
      max-height: 550px;
    }

    img.image {
      margin-top: -510px;
      margin-bottom: 0px;
      margin-left: 40px;
    }
    /* box-shadow: 0 01px #ebe7f6, 01px 0 #ebe7f6, 01px 02px #ebe7f6,
        02px 01px #ebe7f6, 02px 03px #ebe7f6, 03px 02px #ebe7f6,
        03px 04px #ebe7f6, 04px 03px #ebe7f6, 04px 05px #ebe7f6,
        05px 04px #ebe7f6, 05px 06px #ebe7f6, 06px 05px #ebe7f6,
        06px 07px #ebe7f6, 07px 06px #ebe7f6, 07px 08px #ebe7f6,
        08px 07px #ebe7f6;
    } */

    img.purple {
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  /* @media (max-width: 626px) {
    margin: 0px auto auto;
    padding: 30px;

    img {
      width: 100%;
      max-width: 550px;
      max-height: 550px;
      margin-bottom: 20px;
    }

    img.image {
      margin-top: -480px;
      margin-bottom: 0px;
      margin-left: 40px;
      display: flex;
    }

    img.purple {
      margin-top: 0px;
      margin-left: 0px;
    }
  } */

  @media (max-width: 626px) {
    margin: 0px auto 200px;
    padding: 30px;

    display: block;

    img {
      max-width: 100%;
      /* max-height: 100%; */
      /* height: 500px; */
    }

    img.image {
      /* margin: auto; */
      margin-top: -550px;
      margin-left: -0px;
    }

    img.purple {
      /* margin: auto; */
      width: 100%;
      margin-left: -20px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 0px auto 150px;
  }

  @media (max-width: 560px) {
    margin: 0px auto 110px;
  }

  @media (max-width: 500px) {
    margin: 0px auto 50px;
  }
`;
