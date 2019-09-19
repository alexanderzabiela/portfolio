import styled from '@emotion/styled';

const TwoCol = styled('div')`
  p {
    color: white;
    font-size: 13px;
    line-height: 1.5;
  }
  @media only screen and (min-width: 768px) {
    p {
      column-count: 2;
    }
  }

  h3 {
    color: #fed136;
  }

  p,
  h3 {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 768px) {
    p,
    h3 {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .gatsby-resp-image-wrapper {
    max-width: 100% !important;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    @media only screen and (min-width: 768px) {
      margin-bottom: 50px;
      margin-top: 50px;
    }
  }

  /* .gatsby-resp-image-wrapper:nth-of-type(2) {
    max-width: 650px !important;
  } */
`;

export default TwoCol;
