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

export const ServicesContainer = styled.section`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  max-width: 1500px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServicesInfo = styled.div`
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

export const ServicesExperian = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

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
      font-size: 20px;
      color: ${theme.colors.primaryText};
      margin: 16px 0 8px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      color: ${theme.colors.infoText};
    }
  }
`;
