import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  margin-top: 6rem;

  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);

  img {
    width: 100%;
  }

  > div.content {
    padding: 1.2rem;
    p {
      font-size: 1rem;
      margin: 1rem 0;
    }

    button {
      color: ${theme.colors.secondary};
    }
  }

  @media (max-width: 900px) {
    > div.content {
      padding: 0.8rem;
      p {
        font-size: 0.75rem;
        line-height: 1rem;
        margin: 0.4rem 0;
      }

      button {
        color: ${theme.colors.secondary};
      }
    }
  }

  @media (max-width: 550px) {
    margin-top: 0;
  }
`;
