import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  margin: 60px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 40px 0;
  }
`;

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  max-width: 1200px;
  margin: auto;

  .gallery-preview {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    a {
      font-size: 20px;
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
      color: ${theme.colors.infoText};
      cursor: pointer;
      transition: color 400ms ease;

      display: flex;
      align-items: center;

      svg {
        font-size: 16px;
        margin-left: 8px;
      }

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .gallery-preview {
      justify-content: center;
      margin-top: 20px;

      a {
        font-size: 20px;
        font-weight: 500;
        font-family: 'DM Sans', sans-serif;
        color: ${theme.colors.primary};
        transition: color 400ms ease;

        display: flex;
        align-items: center;

        svg {
          font-size: 16px;
          margin-left: 8px;
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    .gallery-preview {
      margin-top: 20px;
    }
  }
`;

export const InstagramContainer = styled.div`
  .image-instagram {
    max-width: 350px;

    display: flex;
    justify-content: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-bottom: 0.5rem;
    }
  }

  a.link-instagram {
    color: ${theme.colors.primaryText};
    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 400ms ease;

    img.img-instagram {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${theme.colors.infoText};
    }
  }
`;

export const GalleryInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

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
    margin-bottom: 20px;
    max-width: 740px;
    text-align: center;
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
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;

    h1 {
      font-size: 40px;
      max-width: 520px;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 0px;

    h1 {
      font-size: 36px;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 16px;
    }

    a.link-instagram {
      margin-bottom: 10px;
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

export const GalleryInfoTitle = styled.div`
  max-width: 680px;

  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 1.2rem;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 610px;

    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    max-width: 550px;
    margin-bottom: 1.2rem;

    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    max-width: 100%;
    margin-bottom: 1rem;

    h1 {
      margin: auto;
      font-size: 40px;
      max-width: 520px;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 0rem;
    h1 {
      font-size: 36px;
      max-width: 520px;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 30px;
      max-width: 350px;
      text-align: center;
    }
  }
`;

export const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  .image-gallery {
    max-width: 350px;
    max-height: 350px;
  }

  .active {
    position: relative;

    &:hover {
      cursor: pointer;
    }

    .image-opacity {
      background-color: ${theme.colors.primaryText};
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 100;

      font-size: 42px;
      font-weight: bold;
      font-family: 'Poppins', sans-serif;
      color: ${theme.colors.background};

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
