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
        if (movieDay.length !== 0) {
          // setMovie(prevState => prevState.concat([...movieDay.results]));
          setMovie([...movieDay.results]);
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
      <ListPopularMovies movie={movie} />
      <Button loadMore={handleLoadMore} />
      {loading && <Loader />}
    </main>
  );
};
