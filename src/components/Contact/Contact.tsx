import { RiWhatsappLine } from 'react-icons/ri';

import {
  ContactContainer,
  Animation,
  ContactInfo,
  ContactSocialMedia
} from './Contact.styles';

export function Contact() {
  return (
    <Animation id="Contact" data-aos="fade-up">
      <ContactContainer>
        <ContactInfo>
          <h1>Entre em contato com a gente!</h1>

          <p>
            Entre em contato com a Lilian Azevedo, venha tirar suas dúvidas, e
            fazer um orçamento.
          </p>

          <button type="button">
            <RiWhatsappLine />
            Entre em contato
          </button>
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
