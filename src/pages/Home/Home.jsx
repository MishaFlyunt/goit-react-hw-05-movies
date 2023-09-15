import { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

import { Pagination } from './Home.styled';
import ListPopularMovies from '../../components/ListPopularMovies/ListPopularMovies';
import { fetchMovieDay } from '../../components/API';
import { Loader } from '../../components/Loader/Loader';
// import { Button } from '../../components/Button/Button';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultMovie = async () => {
      try {
        setLoading(true);
        const movieDay = await fetchMovieDay(page);
        if (movieDay.length !== 0) {
          // setMovie(prevState => prevState.concat([...movieDay]));
          setMovie([...movieDay.results]);
          setTotalPage(movieDay.total_pages);
          setLoading(false);
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

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  console.log(movie);
  return (
    <main>
      <ListPopularMovies movie={movie} />
      {movie.length > 0 && !loading && (
        <Pagination>
          <ResponsivePagination
            current={page}
            total={totalPage}
            onPageChange={setPage}
          />
        </Pagination>
      )}
      {loading && <Loader />}
      {/* {movie.length > 0 && !loading && <Button loadMore={handleLoadMore} />} */}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Home;
