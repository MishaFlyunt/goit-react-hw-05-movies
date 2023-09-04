import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieIdRevies } from '../API';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const resultCast = async () => {
      try {
        const movieReviews = await fetchMovieIdRevies(movieId);
        if (movieReviews.length !== 0) {
          setReviews([...movieReviews.results]);
          // setReviews(movieReviews);
        }
      } catch (error) {
        console.log(error);
      }
    };
    resultCast();
  }, [movieId]);

  console.log(reviews);
  return (
    <section>
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
