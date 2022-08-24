import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 4rem auto;
  padding: 3rem;

  h2 {
    text-align: center;
  }

  div.brand-logo {
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 5rem;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1.75rem;
    }

    div.brand-logo {
      margin-top: 3rem;
      gap: 3rem;
    }
  }

  @media (max-width: 700px) {
    div.brand-logo {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5rem;
      margin-top: 3rem;

      img {
        width: 7.5rem;
      }
    }
  }

  @media (max-width: 550px) {
    margin: 2rem auto;
    padding: 1rem;
    div.brand-logo {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      margin-top: 2rem;

      img {
        width: 5rem;
      }
    }
  }
`;
