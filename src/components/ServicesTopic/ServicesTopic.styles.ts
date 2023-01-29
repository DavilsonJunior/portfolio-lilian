import styled from 'styled-components';
import theme from '../../styles/theme';

export const ServicesTopicsContainer = styled.div`
  display: flex;
  max-width: 697px;
  margin-bottom: 1.25rem;

  img {
    width: 24px;
    height: 24px;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    font-family: 'Poppins', sans-serif;

    strong {
      font-size: 1.5rem;
      line-height: 24px;
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

  @media (max-width: ${theme.breakpoints.xs}) {
    img {
      width: 18px;
      height: 18px;
    }

    .content strong {
      line-height: 20px;
    }
  }
`;
