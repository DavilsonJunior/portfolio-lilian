import styled from 'styled-components';
import theme from '../../styles/theme';

export const ServicesTopicsContainer = styled.div`
  display: flex;
  max-width: 697px;
  margin-bottom: 1.25rem;

  img {
    width: 20px;
    height: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    font-family: 'Poppins', sans-serif;

    strong {
      font-size: 1.5rem;
      line-height: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.primaryText};
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.colors.infoText};
      margin: 8px 0 16px;
    }
  }
`;
