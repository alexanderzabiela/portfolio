import styled from '@emotion/styled';

const SectionTitle = styled('h2')`
  margin-bottom: 44px;
  color: #333333;
  font-size: 24px;
  span {
    color: ${props => props.color};
  }
  p {
    font-size: 16px;
    font-weight: lighter;
    margin-top: 1rem;
  }
`;

export default SectionTitle;
