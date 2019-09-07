import React from 'react';
import styled from '@emotion/styled';
import WebImage from '../../images/web-application-development.svg';
import DebtSol from '../../images/debt-sol-logo.png';
import Project from './project';
import ProjectDetails from './project-details';
import ProjectImage from './project-image';
import Button from './button';
import ProjectPreview from '../components/project-preview';
import usePosts from '../hooks/use-posts';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const baseUrl = '../../images/';

const Projects = () => {
  const posts = usePosts();
  return (
    <Container>
      {posts.map(post => (
        <ProjectPreview key={post.slug} post={post} />
      ))}
    </Container>
  );
};

export default Projects;
