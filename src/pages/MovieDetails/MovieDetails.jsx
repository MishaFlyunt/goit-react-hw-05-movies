import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Loader } from '../../components/Loader/Loader';
import { MovieDetailsList } from '../../components/MovieDetails/MovieDetailsList';
import { fetchMovieId } from '../../components/API';
import { Header, List, LinkDetalis, LinkBack } from './MovieDetails.styled';

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
      <LinkBack to={backLinkHref}>
        <IoArrowBackCircle size={35} />
        Back to the movies
      </LinkBack>
      <MovieDetailsList movDetails={movie} genres={genres} />
      {loading && <Loader />}
      <Header>
        <List>
          <li>
            <LinkDetalis to="cast">Cast</LinkDetalis>
          </li>
          <li>
            <LinkDetalis to="reviews">Reviews</LinkDetalis>
          </li>
        </List>
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};


