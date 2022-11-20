import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  gap: 30px;
  font-size: 20px;
  background-color: #edf2f7;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const NavItem = styled(NavLink)`
  color: #090231;
  padding: 10px;
  text-decoration: none;

  &.active {
    color: #385898;
    scale: 1.1;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #4f6fae;
  }
`;
