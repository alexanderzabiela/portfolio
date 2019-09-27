import styled from '@emotion/styled';

const NavLink = styled('a')`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default NavLink;
