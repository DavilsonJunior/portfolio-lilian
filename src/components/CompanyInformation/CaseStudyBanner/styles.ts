import styled from 'styled-components';
import theme from '../../../styles/theme';

interface ContainerProps {
  url: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 21.375rem;
  width: 100%;
  background: url(${props => props.url}) no-repeat center;
  background-size: 25.5rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.34);

  > p {
    color: ${theme.colors.primary};
  }

  @media (max-width: 900px) {
    max-width: 13.93rem;
    padding: 0.8rem;
    background-size: 17rem;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    width: 60%;
    height: 100%;
    padding: 1rem;
    background-size: 30rem;
    margin: auto;
  }

  @media (max-width: 550px) {
    max-width: 13.93rem;
    width: 100%;
    height: 9.812rem;
    padding: 0.8rem;
    background-size: 17rem;
  }
`;
