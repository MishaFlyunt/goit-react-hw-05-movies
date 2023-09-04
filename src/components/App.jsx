import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Container/ContainerHeader';
import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />} /> */}
        <Route path=":movieId" element={<MovieDetails />}>
          {/* <Route path="movies/:movieId/cast" element={<Cast />} /> */}
          {/* <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
