import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: tomato;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  color: rgb(32, 49, 66);
  font-size: 20px;
  font-weight: 600;
  padding: 7px;

  &.active {
    color: orange;
    background-color: rgb(218, 238, 42);
    border: 2px solid black;
    border-radius: 10px;
  }
`;
