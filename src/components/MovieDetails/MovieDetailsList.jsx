import {
  Container,
  Info,
  Img,
  ContainerImg,
  Title,
  Overview,
  Genres,
  OverviewText,
  GenresText,
  Rating,
} from './MovieDetailsList.styled';

 const MovieDetailsList = ({ movDetails, genres }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, overview, vote_average } = movDetails;

  console.log(genres);
  return (
    <Container>
      <ContainerImg>
        <Img src={imgUrl + poster_path} alt={title} />
      </ContainerImg>
      <Info>
        <Title>{title}</Title>
        <Rating>Rating - {vote_average}</Rating>
        <Overview>Overview</Overview>
        <OverviewText>{overview}</OverviewText>
        <ul>
          <Genres>Genres</Genres>
          {genres.map(item => (
            <li key={item.id}>
              <GenresText>{item.name}</GenresText>
            </li>
          ))}
        </ul>
      </Info>
    </Container>
  );
};

export default MovieDetailsList;
