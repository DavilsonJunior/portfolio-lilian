import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  max-width: 100%;
  background-color: ${theme.colors.secondary};

  padding: 5.53rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${theme.colors.primary};
    text-align: center;
  }

  button {
    margin-top: 3rem;
  }

  @media (max-width: 900px) {
    padding: 2rem;
    h1 {
      font-size: 2.625rem;
    }

    button {
      font-size: 0.813rem;
      padding: 0.95rem 1.5rem;
    }
  }
`;
