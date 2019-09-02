import React from 'react';
import styled from '@emotion/styled';
import WebImage from '../../images/web-application-development.svg';
import Project from './project';
import ProjectDetails from './project-details';
import ProjectImage from './project-image';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Project>
        <ProjectDetails>
          &lt;<span>Project_01 </span>/&gt;
          <h2>Project Name 01</h2>
        </ProjectDetails>
        <ProjectImage src={WebImage} />
      </Project>
      <Project>
        <ProjectDetails>
          &lt;<span>Project_02 </span>/&gt;
          <h2>Project Name 02</h2>
        </ProjectDetails>
        <ProjectImage src={WebImage} />
      </Project>
      <Project>
        <ProjectDetails>
          &lt;<span>Project_03 </span>/&gt;
          <h2>Project Name 03</h2>
        </ProjectDetails>
        <ProjectImage src={WebImage} />
      </Project>
      <Project>
        <ProjectDetails>
          &lt;<span>Project_04 </span>/&gt;
          <h2>Project Name 04</h2>
        </ProjectDetails>
        <ProjectImage src={WebImage} />
      </Project>
    </Container>
  );
};

export default Projects;
