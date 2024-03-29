import { RiWhatsappLine } from 'react-icons/ri';

import {
  ContactContainer,
  Animation,
  ContactInfo,
  ContactSocialMedia,
  ContactImage,
  ContactInfoTitle,
  ContactInfoContainer,
  ContactInfoButton
} from './Contact.styles';

export function Contact() {
  return (
    <Animation data-aos="fade-up">
      <ContactInfoTitle>
        <h1>Entre em contato</h1>
      </ContactInfoTitle>
      <ContactContainer>
        <ContactImage>
          <img
            className="image"
            src="/images/personal/personal-lilian-profile.jpg"
            alt="background hero"
          />
        </ContactImage>

        <ContactInfoContainer>
          <ContactInfo>
            <p>
              Entre em contato comigo para agendar uma visita técnica e
              solicitar o orçamento. Será um prazer lhe atender!
            </p>
          </ContactInfo>
          <ContactSocialMedia>
            <div className="item-social-media">
              <img src="/images/icons/icon-phone.svg" alt="phone icon" />
              <span>16 99646-9902</span>
            </div>
            <div className="item-social-media">
              <img src="/images/icons/icon-location.svg" alt="location icon" />
              <span>São Carlos / SP</span>
            </div>
            <div className="item-social-media">
              <img src="/images/icons/icon-email.svg" alt="email icon" />
              <span>lilianazevedoorganizer@gmail.com</span>
            </div>
          </ContactSocialMedia>
          <ContactInfoButton>
            <ContactInfo>
              <a
                href="https://api.whatsapp.com/send?phone=5516996469902"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappLine />
                Entre em contato
              </a>
            </ContactInfo>
          </ContactInfoButton>
        </ContactInfoContainer>
      </ContactContainer>
    </Animation>
  );
}
