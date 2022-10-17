import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  margin: 150px 0 0 0;

  background-color: ${theme.colors.primaryText};

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    margin: 90px 0 0 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 90px 0 0 0;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    margin: 30px 0 0 0;
  }
`;

export const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  max-width: 1500px;
  height: 237px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;

  p {
    color: ${theme.colors.background};
    font-size: 18px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  @media (max-width: ${theme.breakpoints.md}) {
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

  & > a > svg {
    color: ${theme.colors.background};
    font-size: 28px;

    transition: filter 400ms ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
