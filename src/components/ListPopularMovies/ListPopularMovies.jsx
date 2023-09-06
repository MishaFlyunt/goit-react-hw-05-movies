import { NavLink, useLocation } from 'react-router-dom';
import { Title, List, TitleCard, Img } from './ListPopularMovies.style';

export const ListPopularMovies = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {movie.map(item => (
          <li key={item.id}>
            <NavLink to={`${item.id}`} state={{ from: location }}>
              <Img src={imgUrl + item.poster_path} alt={item.original_title} />
              <TitleCard>{item.original_title}</TitleCard>
            </NavLink>
          </li>
        ))}
      </List>
    </div>
  );
};
