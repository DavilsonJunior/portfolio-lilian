import { RiWhatsappLine } from 'react-icons/ri';

import {
  ContactContainer,
  Animation,
  ContactInfo,
  ContactSocialMedia
} from './Contact.styles';

export function Contact() {
  // const message = 'Olá Lilian, tudo bom? Gostaria de um orçamento!';

  return (
    <Animation id="contact" data-aos="fade-up">
      <ContactContainer>
        <ContactInfo>
          <h1>Entre em contato com a gente!</h1>

          <p>
            Entre em contato com a Lilian Azevedo, venha tirar suas dúvidas, e
            fazer um orçamento.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5516996469902"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappLine />
            Entre em contato
          </a>
        </ContactInfo>
        <ContactSocialMedia>
          <div className="item-social-media">
            <img src="/images/icons/icon-phone.svg" alt="phone icon" />
            <span>16 99646-9902</span>
          </div>
          <div className="item-social-media">
            <img src="/images/icons/icon-location.svg" alt="location icon" />
            <span>R. Amauri Souza, 346</span>
          </div>
          <div className="item-social-media">
            <img src="/images/icons/icon-email.svg" alt="email icon" />
            <span>liliansaazevedo@gmail.com</span>
          </div>
        </ContactSocialMedia>
      </ContactContainer>
    </Animation>
  );
}
