import styled from '@emotion/styled';

const ProjectDetails = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fed136;
  color: #333333;
  padding: 4%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
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
    font-size: 0.9rem;
  }
`;

export default ProjectDetails;
