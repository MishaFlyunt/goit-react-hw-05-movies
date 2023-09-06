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
} from './MovieDetailsList.styled';

export const MovieDetailsList = ({ movDetails, genres }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, overview } = movDetails;

  console.log(genres);
  return (
    <Container>
      <ContainerImg>
        <Img src={imgUrl + poster_path} alt={title} />
      </ContainerImg>
      <Info>
        <Title>{title}</Title>
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
