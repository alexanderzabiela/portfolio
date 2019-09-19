import styled from '@emotion/styled';

const Section = styled('div')`
  width: 100vw;
  padding-top: 54px;
  padding-bottom: 74px;
  background-color: ${props => props.color};

  @media only screen and (min-width: 768px) {
    padding-top: 74px;
    padding-bottom: 74px;
  }
`;

export default Section;
