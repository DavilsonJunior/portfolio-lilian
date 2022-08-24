import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.footer`
  max-width: 1100px;
  margin: 2rem auto 0 auto;
  padding: 2rem 4rem;

  border-top: 0.5px solid ${theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: space-between;

  p.description {
    font-family: Raleway, sans-serif;
    font-size: 0.937rem;
    font-weight: bold;
  }

  div.term {
    max-width: 17.06rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Raleway, sans-serif;
    font-size: 0.937rem;
    font-weight: bold;

    > span + span {
      margin-left: 2rem;
    }
  }

  @media (max-width: 900px) {
    p.description {
      font-size: 0.562rem;
    }

    div.term {
      font-size: 0.562rem;

      > span + span {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    margin: 2rem 0 0 0;
    padding: 2rem 2rem;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    p.description {
      max-width: 12rem;
      line-height: 1.125rem;
    }

    div.term {
      max-width: 12rem;
      margin-top: 1rem;

      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      > span + span {
        margin-left: 0;
      }
    }

    > button {
      margin-top: 1rem;
    }
  }
`;
