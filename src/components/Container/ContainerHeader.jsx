import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../GlobalStyle';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
