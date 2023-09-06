import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(137, 135, 121);
  height: 55px;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  padding: 0 50px;
  gap: 20px;
`;

export const LinkDetalis = styled(NavLink)`
  color: rgb(240, 239, 243);
  font-size: 18px;
  font-weight: 400;
  padding: 6px 14px;

  &.active {
    color: rgb(17, 0, 128);
    background-color: rgb(208, 194, 120);
    border: 2px solid black;
    border-radius: 10px;
    font-weight: 500;
  }
`;

export const LinkBack = styled(Link)`
  padding-left: 25px;
  display: flex;
  gap: 6px;
  align-items: center;
  color: rgb(17, 109, 109);
`;
