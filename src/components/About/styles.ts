import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  max-width: 940px;
  margin: 2rem auto;
  padding: 4rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div.logo {
    max-width: 12.5rem;

    display: flex;
    align-items: center;

    > img {
      max-width: 5.75rem;
      flex: 1;
    }

    span {
      font-family: Raleway, sans-serif;
      font-size: 1.625rem;
      font-weight: 900;
      margin-left: -1rem;
    }
  }

  @media (max-width: 900px) {
    padding: 2rem;

    > div.logo {
      > img {
        max-width: 3.75rem;
        flex: 1;
      }
      span {
        font-size: 1rem;
        margin-left: -0.6rem;
      }
    }
  }

  @media (max-width: 700px) {
    margin: 2rem auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > div.logo {
      > img {
        max-width: 3.75rem;
        width: 100%;
        margin-left: -10%;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 35.187rem;
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ul {
    font-family: Raleway, sans-serif;
    font-size: 1.187rem;
    font-weight: bold;
    color: ${theme.colors.text};

    li {
      padding: 0.2rem;
    }
  }

  div.content1 {
    max-width: 17.6rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    ul {
      font-family: Raleway, sans-serif;
      font-size: 1.187rem;
      font-weight: bold;
      color: ${theme.colors.text};

      li {
        padding: 0.2rem;
      }
    }
  }

  div.content2 {
    max-width: 17.6rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    ul {
      font-family: Raleway, sans-serif;
      font-size: 1.187rem;
      font-weight: bold;
      color: ${theme.colors.text};

      li {
        padding: 0.2rem;
      }
    }
  }

  @media (max-width: 900px) {
    gap: 0.6rem;

    ul {
      li {
        padding: 0.08rem;
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 700px) {
    gap: 4rem;
    margin-top: 1rem;

    div.content1 {
      grid-template-columns: 1fr;
    }

    div.content2 {
      grid-template-columns: 1fr;
      height: 6.36rem;
    }
  }
`;
