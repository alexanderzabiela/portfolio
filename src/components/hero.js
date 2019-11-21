import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import HeroText from './hero-text';
import Button from './button';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 91vh;
  + * {
    margin-top: 0;
  }
  @media only screen and (min-width: 768px) {
    height: 89vh;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-image.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  function scrollDown() {
    window.location.href = '#skills';
  }

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <HeroText>
        <h1>
          Hello, I’m <span>Alex Zabiela</span>.
        </h1>
        <h1>I’m a full stack web developer.</h1>
        <div>
          <Button
            onClick={scrollDown}
            color="white"
            border="1px solid white"
            css={css`
              margin-top: 20px;
            `}
          >
            View my work &nbsp;&nbsp;&nbsp;&darr;
          </Button>
        </div>
      </HeroText>
    </ImageBackground>
  );
};

export default Hero;
