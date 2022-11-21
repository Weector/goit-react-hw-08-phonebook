import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  color: #090231;
  padding: 10px;
  text-decoration: none;

  &.active {
    color: #0088cc;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #005179;
  }
`;
