import React from 'react';

import { Card } from './Card';
import { CaseStudyBanner } from './CaseStudyBanner';

import photoCardProfile from '../../assets/photo-card-profile.png';
import photoCardGroup from '../../assets/photo-card-group.png';
import caseStudioMan from '../../assets/case-studio-man.png';
import caseStudioWomanCook from '../../assets/case-studio-woman-cooking.png';
import caseStudioWomanSmile from '../../assets/case-studio-woman-smile.png';

import { Container } from './styles';

const CompanyInformation: React.FC = () => (
  <Container>
    <section data-aos="fade-down" className="video">
      <h1>Reach More Customers</h1>
      <button type="button" className="contained-light">
        LEARN HOW
      </button>
    </section>
    <section className="works">
      <Card
        url={photoCardProfile}
        alt="card profile"
        description="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
        duration={1500}
        buttonText="Learn More >"
      />

      <Card
        url={photoCardGroup}
        alt="card people group"
        description="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
        duration={2000}
        buttonText="Learn More >"
      />

      <article data-aos="fade-down" className="extra-description">
        <h2>The source for proven, engaging email campaigns</h2>
        <p>
          Whether you’re a startup, small business, e-commerce store, or want to
          promote your app, NinjaMail has the feature set tailored for your
          business.
        </p>
      </article>
    </section>
    <section data-aos="fade-up" className="case-studio">
      <CaseStudyBanner
        url={caseStudioMan}
        title="Frankie"
        description="Member since 2016"
      />

      <CaseStudyBanner
        url={caseStudioWomanCook}
        title="Camile"
        description="Member since 2012"
      />

      <CaseStudyBanner
        url={caseStudioWomanSmile}
        title="Elayne"
        description="Member since 2018"
      />
    </section>
  </Container>
);

export default CompanyInformation;
