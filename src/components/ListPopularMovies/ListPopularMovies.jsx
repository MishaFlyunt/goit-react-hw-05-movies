import { NavLink, useLocation } from 'react-router-dom';

export const ListPopularMovies = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movie.map(item => (
          <li key={item.id}>
            <NavLink to={`${item.id}`} state={{ from: location }}>
              <img src={imgUrl + item.poster_path} alt="" />
              <p>{item.original_title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
