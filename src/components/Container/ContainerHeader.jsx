import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { Container } from '../GlobalStyle';
import { Header, Nav,Link } from './ContainerHeader.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      {/* <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense> */}
      <Outlet />
    </Container>
  );
};
