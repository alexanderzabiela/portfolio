import styled from '@emotion/styled';

const Button = styled('button')`
  background-color: unset;
  color: ${props => props.color};
  font-family: Montserrat;
  font-size: 12px;
  padding: 7px;
  max-width: 165px;
  border: ${props => props.border};
  @media only screen and (min-width: 768px) {
    margin-bottom: 0%;
    display: flex;
    font-size: 14px;
  }
`;

export default Button;
