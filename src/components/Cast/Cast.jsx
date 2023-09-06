import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieIdCast } from '../API';
import { List, Name } from './Cast.styled';

export const Cast = () => {
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
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={imgUrl + item.profile_path}
              alt={item.name}
              width={150}
              height={200}
            />
            <Name>{item.name}</Name>
          </li>
        ))}
      </List>
    </section>
  );
};
