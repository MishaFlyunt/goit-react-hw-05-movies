import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchMovieDay } from '../../components/API';

export const ListPopularMovies = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const resultMovie = async () => {
      try {
        const movieDay = await fetchMovieDay();
        if (movieDay.length !== 0) {
          setMovie(movieDay);
        }
      } catch (error) {
        console.log(error);
      }
    };
    resultMovie();
  }, []);
  console.log(movie);
  return (
    <main>
      <div>
        <ul>
          <li>
            <NavLink>{}</NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};
