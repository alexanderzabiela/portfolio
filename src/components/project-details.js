import styled from '@emotion/styled';

const ProjectDetails = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fed136;
  color: #333333;
  padding: 4%;

  @media only screen and (min-width: 768px) {
    width: 280px;
  }

  span,
  p {
    text-align: left;
  }

  span {
    color: white;
    font-size: 13px;
  }

  h2 {
    color: black;
    font-weight: normal;
    text-align: left;
    font-size: 20px;
  }
`;

export default ProjectDetails;
