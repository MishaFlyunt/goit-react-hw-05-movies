import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieIdCast } from '../API';
import { List, Name, Img } from './Cast.styled';
import photoStub from '../../img/photoStub.png';

const Cast = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w200';

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const resultCast = async () => {
      try {
        const movieCast = await fetchMovieIdCast(movieId);
        if (movieCast.length !== 0) {
          setCast([...movieCast.cast]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    resultCast();
  }, [movieId]);

  console.log(cast);
  return (
    <section>
      <List>
        {cast.length ? (
          cast.map(item => (
            <li key={item.id}>
              <Img
                // src={imgUrl + item.profile_path}
                src={
                  item.profile_path !== null
                    ? imgUrl + item.profile_path
                    : photoStub
                }
                alt={item.name}
              />
              <Name>{item.name}</Name>
            </li>
          ))
        ) : (
          <p>We don't have any cast information for this movie.</p>
        )}
      </List>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default Cast;
