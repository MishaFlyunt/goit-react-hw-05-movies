export const MovieDetailsList = ({ movDetails, genres }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, overview } = movDetails;

  console.log(genres);
  return (
    <>
      <div>
        <img src={imgUrl + poster_path} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>Overview</h2>
        <p>{overview}</p>
        <ul>
          <h2>Genres</h2>
          {genres.map(item => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
