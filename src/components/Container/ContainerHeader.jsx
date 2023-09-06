import { Outlet } from 'react-router-dom';
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
      <Outlet />
    </Container>
  );
};
