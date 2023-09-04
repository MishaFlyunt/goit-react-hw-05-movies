import { useLocation, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { MovieDetailsList } from '../../components/MovieDetails/MovieDetailsList';
import { fetchMovieId } from '../../components/API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultMovie = async () => {
      try {
        setLoading(true);
        const movieDetails = await fetchMovieId(movieId);
        setMovie(movieDetails);
        setGenres([...movieDetails.genres]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    resultMovie();
  }, [movieId]);

  console.log(movieId);
  console.log(movie);
  return (
    <main>
      <Link to={backLinkHref}>Back to products</Link>
      <MovieDetailsList movDetails={movie} genres={genres} />
      {loading && <Loader />}
    </main>
  );
};
