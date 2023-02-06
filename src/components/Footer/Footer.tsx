import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import {
  Animation,
  FooterContainer,
  FooterInfo,
  FooterLogo,
  FooterSocialMedia
} from './Footer.styles';

export function Footer() {
  // function handleScrollTop() {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }
  return (
    <Animation>
      <FooterContainer>
        <FooterInfo>
          <p>©{new Date().getFullYear()} Lílian Azevedo Personal Organizer</p>
          <p>Todos os direitos reservados.</p>
        </FooterInfo>
        <FooterLogo>
          <Image
            src="/images/logos/logo-footer.svg"
            alt="logo footer Lilian"
            width="340px"
            height="139px"
          />
        </FooterLogo>
        <FooterSocialMedia>
          <a
            href="https://www.instagram.com/lilianazevedoorganizer/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/lilianazevedoorganizer"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5516996469902"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </FooterSocialMedia>
        {/* <button onClick={handleScrollTop} type="button">
        <ArrowCircleUp size={36} color={theme.colors.secondary} weight="fill" />
      </button> */}
      </FooterContainer>
    </Animation>
  );
}
