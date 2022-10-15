import styled from 'styled-components';
import theme from '../../styles/theme';

export const HowWorkContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.boxShadowPurple};
  padding: 24px;
  border-radius: 10px;

  .item-ball {
    width: 100%;
    max-width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};

    color: ${theme.colors.background};
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    strong {
      color: ${theme.colors.primaryText};
      font-family: 'Poppins', sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
    }

    p {
      color: ${theme.colors.infoText};
      font-family: 'DM Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      margin-top: 8px;
      font-style: normal;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    .content {
      p {
        text-align: justify;
      }
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      display: flex;
      flex-direction: column;
      margin-left: 0rem;
      margin-top: 10px;

      strong {
        text-align: center;
      }
    }
  }
`;
