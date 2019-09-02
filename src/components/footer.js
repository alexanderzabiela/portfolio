import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import NavLink from './nav-link.js';
import logo from '../../images/footer-logo.svg';

const Container = styled('div')`
  margin-top: 46px;
  display: flex;
  h4,
  p {
    font-size: 13px;
  }
`;

const Footer = () => {
  return (
    <footer
      css={css`
        background: white;
        display: none;
        justify-content: space-between;
        padding: 0 calc((100vw - 1180px - 0.5rem) / 2);
        margin-bottom: -15px;
        width: 1180px;
        padding-top: 40px;
        padding-bottom: 74px;
        max-width: 100vw;
        @media only screen and (min-width: 768px) {
          margin-bottom: 0%;
          display: flex;
        }
      `}
    >
      <NavLink to="/" fontWeight="bold">
        <img
          src={logo}
          alt="Logo"
          css={css`
            height: 70px;
            @media only screen and (min-width: 768px) {
              height: 115px;
            }
          `}
        />
      </NavLink>
      <Container>
        <div
          css={css`
            width: 140px;
          `}
        >
          <h4>Office</h4>
          <p>31 Mainway</p>
          <p>Manchester</p>
          <p>M241LE</p>
          <p>Manchester</p>
        </div>
        <div
          css={css`
            width: 140px;
          `}
        >
          <h4>Contact</h4>
          <p>+44 (0)7802437454</p>
          <p>enquiries@alexzabiela.co.uk</p>
        </div>
      </Container>
      <div
        css={css`
          width: 100px;
        `}
      ></div>
    </footer>
  );
};

export default Footer;
