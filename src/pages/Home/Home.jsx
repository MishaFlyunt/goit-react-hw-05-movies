import { ListPopularMovies } from '../../components/ListPopularMovies/ListPopularMovies';
import { useEffect, useState } from 'react';
import { fetchMovieDay } from '../../components/API';
import { Loader } from '../../components/Loader/Loader';
import { Button } from '../../components/Button/Button';

export const Home = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultMovie = async () => {
      try {
        setLoading(true);
        const movieDay = await fetchMovieDay(page);
        if (movieDay.length) {
          // setMovie(prevState => prevState.concat([...movieDay]));
          setMovie(movieDay);
          setLoading(false);
          console.log(movieDay.page);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    resultMovie();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  console.log(movie);
  return (
    <main>
      <ListPopularMovies loadMore={handleLoadMore} movie={movie} />
      {loading && <Loader />}
      
      {movie.length > 0 && !loading && <Button loadMore={handleLoadMore} />}
    </main>
  );
};
