import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  max-width: 900px;
  margin: 4rem auto;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    div.form-control {
      max-width: 26.25rem;
      flex: 1;

      input {
        border-radius: 0.3125rem;
        width: 100%;
        padding: 1.25rem;
        border: 1px solid ${theme.colors.border};

        &::placeholder {
          color: ${theme.colors.text};
        }
      }

      div {
        font-family: Raleway, sans-serif;
        font-size: 1.312rem;
        font-weight: 500;
        color: ${theme.colors.secondary};
        padding: 1.2rem;
      }
    }

    button {
      margin-left: 1.687rem;
      height: 4.0625rem;
    }
  }

  @media (max-width: 900px) {
    margin: 4rem auto;

    h2 {
      font-size: 1.75rem;
      line-height: 1.93rem;
    }

    form {
      display: flex;
      justify-content: center;
      margin-top: 2rem;

      div.form-control {
        max-width: 26.25rem;
        flex: 1;

        input {
          border-radius: 0.3125rem;
          width: 100%;
          padding: 1.25rem;
          border: 1px solid ${theme.colors.border};

          &::placeholder {
            color: ${theme.colors.text};
          }
        }

        div {
          font-family: Raleway, sans-serif;
          font-size: 1.312rem;
          font-weight: 500;
          color: ${theme.colors.secondary};
          padding: 1.2rem;
        }
      }

      button {
        margin-left: 1.687rem;
        height: 4.0625rem;
      }
    }
  }

  @media (max-width: 700px) {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 2rem;

    h2 {
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      div.form-control {
        max-width: 26.25rem;
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
          padding: 1rem 0 0 0;
        }
      }

      button {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  }
`;
