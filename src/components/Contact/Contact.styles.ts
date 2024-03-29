import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin: 60px 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 40px 0;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px 20px 50px 20px;

  max-width: 800px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 30px 20px 20px;
  }
`;

export const ContactImage = styled.div`
  max-width: 200px;
  max-height: 300px;

  img {
    width: 100%;
    height: 100%;
    box-shadow: -1.5rem -1.5rem ${theme.colors.boxShadowPurple};
    margin-left: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 150px;
    max-height: 250px;

    img {
      box-shadow: -1rem -1rem ${theme.colors.boxShadowPurple};
      margin-left: 1rem;
    }
  }
`;

export const ContactInfo = styled.div`
  max-width: 410px;

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
    text-align: justify;
  }

  a {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.buttonText};
    font-size: 16px;
    font-weight: 500;
    max-width: 236px;

    padding: 16px 32px;
    border-radius: 4px;
    transition: filter 400ms;

    display: flex;
    align-items: center;

    margin-top: 20px;

    svg {
      font-size: 24px;
      margin-right: 12px;
    }

    &:hover {
      filter: brightness(0.8);
    }
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
    max-width: 100%;
    margin-top: 20px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      margin: 22px 0;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: 40px;
      max-width: 520px;
    }

    p {
      font-size: 20px;
      max-width: 520px;
      text-align: center;
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
      margin: 12px 0;
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

export const ContactInfoTitle = styled.div`
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

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactInfoButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;

  .item-social-media {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      max-width: 26px;
    }

    span {
      font-size: 20px;
      font-weight: 400;
      font-family: 'DM Sans', sans-serif;
      color: ${theme.colors.infoText};
      margin-left: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin-top: 30px;

    .item-social-media {
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    height: 100px;

    .item-social-media {
      img {
        width: 100%;
        max-width: 20px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;
