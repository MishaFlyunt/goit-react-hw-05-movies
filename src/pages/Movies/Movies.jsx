import { useState, useEffect, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import  MoviesSearch  from '../../components/MoviesSearch/ MoviesSearch';
import  MoviesSearchList  from '../../components/MoviesSearchList/MoviesSearchList';
import { fetchMovieSearch } from '../../components/API';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Sorry, The search criteria are unknown');
      return;
    }

    const queryCurrent = evt.target.elements.query.value.trim();
    setSearchParams({ query: queryCurrent });
    evt.target.reset();
  };

  useEffect(() => {
    if (query === '') return;

    const loadResult = async () => {
      try {
        setLoading(true);
        const movieSearch = await fetchMovieSearch(query, page);
        if (movieSearch.length) {
          // setMovie(prevState => prevState.concat([...movieSearch]));
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
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  console.log(movie);
  return (
    <section>
      <MoviesSearch submit={handleSubmit} />
      <MoviesSearchList movie={movie} />
      {movie.length > 0 && !loading && <Button loadMore={handleLoadMore} />}
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default Movies;
