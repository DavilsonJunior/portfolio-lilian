import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Content } from './styles';

const About: React.FC = () => (
  <Container>
    <div data-aos="fade-up" className="logo">
      <img src={logoImg} alt="logo Ninja mail" />
      <span>NinjaMail</span>
    </div>

    <Content>
      <div className="content1">
        <div className="column1">
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
          </ul>
        </div>

        <div className="column2">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Tutorials</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Templates</a>
            </li>
            <li>
              <a href="/">Case Studies</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="content2">
        <div className="column3">
          <ul>
            <li>
              <a href="/">Medium</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="column4">
          <ul>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Slack</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </Content>
  </Container>
);

export default About;
