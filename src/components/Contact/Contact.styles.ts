import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  /* margin: 150px 0; */

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    /* margin: 90px 0; */
    margin: 60px 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    /* margin: 90px 0; */
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    /* margin: 30px 0; */
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 20px 50px 20px;

  max-width: 1200px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
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
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 40px;
      max-width: 520px;
    }

    p {
      font-size: 20px;
      margin: 22px 0;
      max-width: 520px;
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

export const ContactSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;

  .item-social-media {
    display: flex;
    align-items: center;
    justify-content: center;

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

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 30px;
  }

  @media (max-width: 400px) {
    height: 120px;

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
