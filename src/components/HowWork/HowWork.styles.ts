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

export const HowWorkContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  max-width: 1500px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;

export const HowWorkInfo = styled.div`
  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
  }

  .topics {
    margin-top: 40px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  p {
    color: ${theme.colors.infoText};
    font-size: 18px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    margin: 28px 0;
    font-style: italic;
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

  @media (max-width: 850px) {
    .topics {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
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

    h2 {
      font-size: 16px;
      margin: 16px 0;
    }
  }
`;
