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
  const { poster_path, title, overview, vote_average, release_date } =
    movDetails;

  // const release = release_date.substring(0, 4);
  console.log(typeof release_date);
  const voteAverage = Number(vote_average).toFixed(1);
  // substring(0, 4);
  console.log(genres);
  return (
    <Container>
      <ContainerImg>
        <Img src={imgUrl + poster_path} alt={title} />
      </ContainerImg>
      <Info>
        <Title>
          {title}
          {/* {release} */}
        </Title>
        <Rating>Rating - {voteAverage}</Rating>
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
