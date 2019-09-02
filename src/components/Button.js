import styled from '@emotion/styled';

const Button = styled('button')`
  background-color: unset;
  color: ${props => props.color};
  font-family: Montserrat;
  font-size: 14px;
  padding: 7px;
  max-width: 165px;
  border: ${props => props.border};
`;

export default Button;
