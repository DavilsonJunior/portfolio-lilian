import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  margin: 150px 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0px 0px;
    padding: 0;
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin: 90px 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 90px 0;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    margin: 30px 0;
  }
`;

export const GalleryViewContainer = styled.section`
  max-width: 1500px;
  margin: auto;
  padding: 1.25rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryViewInfo = styled.div`
  max-width: 783px;
  text-align: center;
  margin: auto;

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
    }

    p {
      font-size: 20px;
      margin: 22px 0;
      text-align: justify;
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
      text-align: justify;
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

export const GalleryViewImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
