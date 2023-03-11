import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import {
  Animation,
  FooterContainer,
  FooterInfo,
  FooterLogo,
  FooterSocialMedia
} from './Footer.styles';

export function Footer() {
  const router = useRouter();

  return (
    <Animation>
      <FooterContainer>
        <FooterInfo>
          <p>©{new Date().getFullYear()} Lílian Azevedo - Personal Organizer</p>
          <p>Todos os direitos reservados.</p>
        </FooterInfo>
        <FooterLogo>
          <button type="button" onClick={() => router.push('/')}>
            <Image
              src="/images/logos/logo-footer.svg"
              alt="logo footer Lilian"
              width="340px"
              height="139px"
            />
          </button>
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
      </FooterContainer>
    </Animation>
  );
}
