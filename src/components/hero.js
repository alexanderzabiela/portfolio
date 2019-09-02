import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import HeroText from './hero-text';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 91vh;
  + * {
    margin-top: 0;
  }
  @media only screen and (min-width: 768px) {
    height: 84vh;
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
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <HeroText>
        <h1>
          Hello, I’m <span>Alex Zabiela</span>.
        </h1>
        <h1>I’m a full-stack web developer.</h1>
        {/* <div>
          <span>View my work &darr;</span>
        </div> */}
      </HeroText>
    </ImageBackground>
  );
};

export default Hero;
