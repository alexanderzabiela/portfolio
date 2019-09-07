import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';
import ProjectDetails from './project-details';
import Button from './button';

const ProjectPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      flex-direction: row;
      height: 150px;
      margin-bottom: 30px;
      margin-left: auto;
      margin-right: auto;
      @media only screen and (min-width: 768px) {
        width: 49%;
        height: 100%;
      }
      span,
      p {
        font-size: 18px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
      span {
        margin-bottom: 16px;
        font-weight: 500;
      }
      p {
        font-size: 13px;
      }
      a {
        text-decoration: none;
      }
    `}
  >
    <ProjectDetails>
      <div>
        &lt;<span>{post.projectNumber}&nbsp;</span>/&gt;
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
      <div>
        <Link to={post.slug}>
          <Button color="black" border="1px black solid">
            View My work &nbsp;&nbsp;&rarr;
          </Button>
        </Link>
      </div>
    </ProjectDetails>
    <Image
      fluid={post.image.sharp.fluid}
      css={css`
        object-fit: cover;
        max-width: 100%;
        width: 150px;
        height: 150px;
        @media only screen and (min-width: 768px) {
          width: 280px;
          height: 280px;
        }
      `}
      alt={post.title}
    />
  </article>
);

export default ProjectPreview;
