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
        <p>Fast, responsive and engaging apps that bring your ideas to life.</p>
      </Skill>
      <Skill>
        <SkillImage src={MobileImage} />
        <span>Mobile Application Development</span>
        <p>
          Cross-platform apps built with efficiency and speed for Android and
          iOS at once.
        </p>
      </Skill>
      <Skill>
        <SkillImage src={APIImage} />
        <span>API Integration and Development</span>
        <p>
          REST and SOAP API integration. REST API development with Node.js and
          Loopback.
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
          Database architectures in MongoDB, MySQL or Parse Server, always
          aiming for performance, scale and stability.
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
          platforms such as Heroku and Amazon AWS.
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
