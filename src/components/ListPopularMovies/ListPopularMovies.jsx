import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDay } from '../API';

export const ListPopularMovies = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const resultMovie = async () => {
      try {
        const movieDay = await fetchMovieDay(page);
        setMovie(movieDay.results);
        console.log(movieDay.page);
      } catch (error) {
        console.log(error);
      }
    };
    resultMovie();
  }, [page]);

  // console.log(movie);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movie.map(item => {
          return (
            <li key={item.id}>
              <NavLink to={`${item.id}`}>{item.original_title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
