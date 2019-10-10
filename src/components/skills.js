import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import WebImage from '../../images/web-application-development.svg';
import MobileImage from '../../images/mobile-application-development.svg';
import APIImage from '../../images/api-integration.svg';
import DatabaseImage from '../../images/database-design.svg';
import CloudImage from '../../images/cloud-integration.svg';
import PaymentImage from '../../images/payment-integration.svg';
import Skill from './skill';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  span,
  p {
    color: #333333;
  }
  a {
    color: #fed136;
  }
`;

const SkillImage = styled('img')`
  width: 90px;
  height: 90px;
  align-self: center;
  margin-bottom: 16px;
`;

const Skills = () => {
  return (
    <Container>
      <Skill>
        <SkillImage src={WebImage} />
        <span>Web Application Development</span>
        <p>
          Fast, responsive and engaging apps that bring your ideas to life.{' '}
          <a
            target="_blank"
            href="https://xd.adobe.com/spec/2b610272-d5f9-4fcb-5dc3-ebb3023a59f3-5d50/"
          >
            See the designs for this site.
          </a>
        </p>
      </Skill>
      <Skill>
        <SkillImage src={MobileImage} />
        <span>Responsive Web Development</span>
        <p>
          Web apps and sites built with efficiency and speed for all screen
          sizes. See my Google PageSpeed Insights score{' '}
          <a
            target="_blank"
            href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.alexzabiela.com%2F&tab=desktop"
          >
            here.
          </a>
        </p>
      </Skill>
      <Skill>
        <SkillImage src={APIImage} />
        <span>API Integration and Development</span>
        <p>
          REST and SOAP API integration. REST API development with Node.js. Here
          is simple{' '}
          <a target="_blank" href="https://fervent-kirch-2242fe.netlify.com/">
            Pokedex
          </a>{' '}
          which interacts with the RESTful PokéAPI.
        </p>
      </Skill>
      <Skill>
        <SkillImage src={DatabaseImage} />
        <span
          css={css`
            word-spacing: 100px;
          `}
        >
          Database Design
        </span>
        <p>
          Database architectures in MongoDB or MySQL, always aiming for
          performance, scale and stability.
        </p>
      </Skill>
      <Skill>
        <SkillImage src={CloudImage} />
        <span
          css={css`
            word-spacing: 100px;
          `}
        >
          Cloud Integration
        </span>
        <p>
          Deployment of NodeJS apps, ReactJS apps and databases to leading cloud
          platforms such as Amazon AWS and Netlify.
        </p>
      </Skill>
      <Skill>
        <SkillImage src={PaymentImage} />
        <span>Payment Gateway Integration</span>
        <p>
          Integration with the most popular Payment Gateways such as Stripe and
          Paypal.
        </p>
      </Skill>
    </Container>
  );
};

export default Skills;
