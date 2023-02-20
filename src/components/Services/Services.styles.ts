import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  /* margin: 150px 0; */
  margin: 5rem 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 5rem 0;
    padding: 0;
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin: 40px 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    /* margin: 90px 0; */
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    /* margin: 30px 0; */
  }
`;

export const ServicesContainer = styled.section`
  max-width: 1500px;
  margin: auto;
  padding: 1.25rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ServicesInfo = styled.div`
  margin: auto;
  margin: 8px 0px 16px;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
  }

  .services-item {
    display: flex;
    justify-content: flex-start;

    img {
      width: 24px;
      height: 24px;
      margin-right: 1rem;
    }

    strong {
      font-size: 1.5rem;
      line-height: 24px;
      font-weight: 500;
      color: ${theme.colors.primaryText};
      font-family: 'Poppins', sans-serif;
      text-align: justify;
    }
  }

  p {
    color: ${theme.colors.infoText};
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    text-align: justify;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    margin: 10px 0;

    h1 {
      margin: auto;
      font-size: 40px;
      max-width: 520px;
    }

    p {
      line-height: 24px;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 2.25rem;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 1rem;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 1.875rem;
      max-width: 350px;
      text-align: center;
    }

    .services-item {
      strong {
        line-height: 24px;
      }
    }
  }
`;

export const ServicesContent = styled.div``;

export const ServicesClientInfo = styled.div`
  /* max-width: 783px; */
  /* text-align: center; */
  margin: 8px 0px 16px;

  display: flex;
  align-items: center;

  p {
    color: ${theme.colors.infoText};
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    text-align: justify;
  }

  .client-info {
    padding: 1.25rem;
    border-radius: 1.25rem;
    background-color: ${theme.colors.boxShadowPurple};
    color: ${theme.colors.infoTextSecondary};
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    text-align: justify;
    margin-left: 40px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    margin: 10px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
      line-height: 24px;
      text-align: justify;
    }

    .client-info {
      margin-left: 0px;
      margin-top: 1.25rem;
      padding: 1rem;
      font-size: 0.875rem;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    p {
      font-size: 1rem;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 1.875rem;
      max-width: 350px;
      text-align: center;
    }

    .services-item {
      strong {
        line-height: 24px;
      }
    }
  }
`;

export const ServicesInfoTitle = styled.div`
  max-width: 680px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 3rem;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 610px;
    margin-bottom: 2.5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    max-width: 550px;
    margin-bottom: 1.2rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.875rem;
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

    p {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 0.625rem;
    h1 {
      font-size: 2.25rem;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 1.875rem;
      max-width: 350px;
      text-align: center;
    }
  }
`;

export const ServicesExperian = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  margin-top: 0px;

  .card {
    -webkit-box-shadow: 1px 1px 5px -2px #000000;
    box-shadow: 1px 1px 5px -2px #000000;
    padding: 32px;
    border-bottom: 3px solid ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 22px;
      color: ${theme.colors.primaryText};
      margin: 16px 0 8px;
      font-family: 'DM Sans', sans-serif;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: ${theme.colors.infoText};
      font-family: 'DM Sans', sans-serif;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;

    span {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    margin-top: 20px;

    span {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;
