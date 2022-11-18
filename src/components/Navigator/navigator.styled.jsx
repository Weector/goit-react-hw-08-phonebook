import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  padding-left: 120px;
  font-size: 20px;
  background-color: #03000b15;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const NavItem = styled(NavLink)`
  color: #090231;
  padding: 20px;

  text-decoration: none;

  &.active {
    color: #4533d4;
    scale: 1.1;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #4533d4;
  }
`;
