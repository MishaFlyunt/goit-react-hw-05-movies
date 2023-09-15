import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieIdRevies } from '../API';
import { List, Item, Title, Text, Info } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const resultCast = async () => {
      try {
        const movieReviews = await fetchMovieIdRevies(movieId);
        if (movieReviews.length !== 0) {
          setReviews([...movieReviews.results]);
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
      <List>
        {reviews.length ? (
          reviews.map(item => (
            <Item key={item.id}>
              <Title>{item.author}</Title>
              <Text>{item.content}</Text>
            </Item>
          ))
        ) : (
          <Info>We have no comments for this movie.</Info>
        )}
      </List>
    </section>
  );
};

export default Reviews;
