import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { MoviesSearch } from '../../components/MoviesSearch/ MoviesSearch';
import { MoviesSearchList } from '../../components/MoviesSearchList/MoviesSearchList';
import { fetchMovieSearch } from '../../components/API';
import { useParams, Outlet } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  // const location = useLocation();

  const changeQuery = newQuery => {
    //  setQuery(`${Date.now()}/${newQuery}`);
    setQuery(newQuery);
    setMovie([]);
    setPage(1);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Sorry, The search criteria are unknown');
      return;
    }
    changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  useEffect(() => {
    if (query === '') return;
    if (setQuery !== query || setPage !== page) {
      console.log(`HTTP запит за ${query}, і page=${page}`);
    }
    const loadResult = async () => {
      try {
        setLoading(true);
        const movieSearch = await fetchMovieSearch(query, page, movieId);
        if (movieSearch.length) {
          setMovie(movieSearch);
          setLoading(false);
        } else {
          toast.error('Sorry, Nothing was found for these criteria');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadResult();
  }, [query, page, movieId]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  console.log(movie);
  return (
    <section>
      <MoviesSearch submit={handleSubmit} />
      <MoviesSearchList movie={movie} />
      {movie.length > 0 && !loading && (
        <Button loadMore={handleLoadMore} />
      )}
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </section>
  );
};
