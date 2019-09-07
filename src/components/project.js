import styled from '@emotion/styled';

const Project = styled('div')`
  display: flex;
  flex-direction: row;
  height: 150px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 49%;
    /* height: 280px; */
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

  /* @media only screen and (min-width: 768px) {
    width: 48%;
    height: 221px;
  } */
`;

export default Project;
