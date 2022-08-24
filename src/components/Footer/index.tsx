import React from 'react';
import { ArrowCircleUp } from 'phosphor-react';

import { Container } from './styles';
import theme from '../../styles/theme';

const Footer: React.FC = () => {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <p className="description">
        NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights
        reserved.
      </p>
      <div className="term">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      <button onClick={handleScrollTop} type="button">
        <ArrowCircleUp size={36} color={theme.colors.secondary} weight="fill" />
      </button>
    </Container>
  );
};

export default Footer;
