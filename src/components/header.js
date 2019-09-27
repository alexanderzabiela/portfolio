import React from 'react';
import { css } from '@emotion/core';
import NavLink from './nav-link.js';
import logo from '../../images/logo.svg';
import linkedIn from '../../images/linked-in.svg';
import github from '../../images/github.svg';
import twitter from '../../images/twitter.svg';
import email from '../../images/email.svg';

const Header = () => (
  <header
    css={css`
      background: #fed136;
      display: flex;
      justify-content: space-between;
      padding: 0 calc((100vw - 1180px - 0.5rem) / 2);
      margin-bottom: -15px;
      @media only screen and (min-width: 768px) {
        margin-bottom: 0%;
      }
    `}
  >
    <NavLink href="/" fontWeight="bold">
      <img
        src={logo}
        alt="Logo"
        css={css`
          height: 68px;
          @media only screen and (min-width: 768px) {
            height: 115px;
          }
        `}
      />
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
        line-height: 4.7rem;

        margin-right: 35px;

        @media only screen and (min-width: 768px) {
          height: 6.5rem;
          line-height: 8.3rem;
        }
      `}
    >
      <NavLink
        href="https://www.linkedin.com/in/alexander-zabiela-8ba318133"
        activeClassName="current-page"
      >
        <img
          src={linkedIn}
          alt="LinkedIn"
          css={css`
            height: 26px;
            text-decoration: none;
            @media only screen and (min-width: 768px) {
              height: 35px;
            }
          `}
        />
      </NavLink>
      <NavLink
        href="https://github.com/alexanderzabiela"
        activeClassName="current-page"
      >
        <img
          src={github}
          alt="Github"
          css={css`
            height: 26px;
            text-decoration: none;
            @media only screen and (min-width: 768px) {
              height: 35px;
            }
          `}
        />
      </NavLink>
      {/* <NavLink to="/" activeClassName="current-page">
        <img
          src={twitter}
          alt="Twitter"
          css={css`
            height: 26px;
            text-decoration: none;
            @media only screen and (min-width: 768px) {
              height: 35px;
            }
          `}
        />
      </NavLink> */}
      {/* <NavLink to="/" activeClassName="current-page">
        <img
          src={email}
          alt="Email"
          css={css`
            height: 26px;
            text-decoration: none;
            @media only screen and (min-width: 768px) {
              height: 35px;
            }
          `}
        />
      </NavLink> */}
    </nav>
  </header>
);

export default Header;
