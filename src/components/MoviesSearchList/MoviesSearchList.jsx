import { NavLink, useLocation } from 'react-router-dom';
import { List, TitleCard, Img } from './MoviesSearchList.styled';

export const MoviesSearchList = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  return (
    <div>
      <List>
        {movie.map(item => (
          <li key={item.id}>
            <NavLink to={`${item.id}`} state={{ from: location }}>
              <Img src={imgUrl + item.poster_path} alt={item.original_title}  />
              <TitleCard>{item.original_title}</TitleCard>
            </NavLink>
          </li>
        ))}
      </List>
    </div>
  );
};
