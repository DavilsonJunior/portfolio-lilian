import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  margin: 150px 0;

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

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  max-width: 1500px;
  margin: auto;
`;

export const GalleryInfo = styled.div`
  text-align: center;

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
    max-width: 740px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      margin: 22px 0;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    margin-top: 20px;

    h1 {
      font-size: 40px;
      max-width: 520px;
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

    .content strong {
      font-size: 22px;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`;

export const GalleryImages = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;

  .image-gallery {
    max-width: 350px;
    max-height: 350px;
  }

  .active {
    width: 450px;
    max-height: 408px;
    position: relative;

    & > div > img {
      border-radius: 20px;
    }

    & > .image-opacity {
      position: absolute;
      background-color: ${theme.colors.primaryText};
      border-radius: 20px;
      opacity: 0;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      transition: opacity 400ms ease;
    }

    &:hover {
      & > .image-opacity {
        opacity: 0.6;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: '15+';
          font-size: 42px;
          font-weight: bold;
          font-family: 'Poppins', sans-serif;
          color: ${theme.colors.background};
        }
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      & > .image-opacity {
        opacity: 0.6;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 99%;

        &::after {
          content: '15+';
          font-size: 42px;
          font-weight: bold;
          font-family: 'Poppins', sans-serif;
          color: ${theme.colors.background};
        }
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    & > .active .image-opacity {
      height: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 20px;

    & > .active {
      width: 100%;
    }

    & > .active .image-opacity {
      height: 98.5%;
    }

    .image-gallery {
      padding: 20px;
    }
  }

  @media (max-width: 338px) {
    padding: 20px;

    & > .active {
      width: 100%;
    }

    & > .active .image-opacity {
      height: 98%;

      &::after {
        font-size: 32px;
      }
    }

    .image-gallery {
      padding: 20px;
    }
  }
`;
