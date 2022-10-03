import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  padding: 1em;
  margin: 150px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 110px 0;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    margin: 80px 0;
  }
`;

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1500px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutInfo = styled.div`
  max-width: 680px;

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
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 610px;
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    max-width: 550px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      margin: 22px 0;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    max-width: 100%;

    h1 {
      margin: auto;
      font-size: 40px;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 20px;
      margin: 22px 0;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 36px;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 16px;
      margin: 22px 0;
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
    }
  }
`;

export const AboutImage = styled.div`
  height: 405px;
  padding: 0 30px;

  img {
    max-width: 500px;
    max-height: 500px;
    box-shadow: -2rem -2rem ${theme.colors.boxShadowPurple};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    img {
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin-top: auto;

    img {
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: auto;
    width: 100%;

    img {
      width: 100%;
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    img {
      margin-right: -30px;
    }
  }
`;
