import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  /* margin: 150px 0 0 0; */
  margin: 0;

  background-color: ${theme.colors.primaryText};

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    /* margin: 90px 0 0 0; */
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    /* margin: 90px 0 0 0; */
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    /* margin: 30px 0 0 0; */
  }
`;

export const FooterContainer = styled.section`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;

  padding: 1.25rem;

  max-width: 1500px;
  height: 237px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  margin-right: auto;

  p {
    color: ${theme.colors.background};
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-right: 0;

    p {
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 50px;

    p {
      font-size: 15px;
    }
  }
`;

export const FooterLogo = styled.div`
  max-width: 350px;

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 50px 0;
    max-width: 250px;
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  margin-left: auto;

  & > a > svg {
    color: ${theme.colors.background};
    font-size: 28px;

    transition: filter 400ms ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-left: 0;

    p {
      text-align: center;
    }
  }
`;
