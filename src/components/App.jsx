import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Container/ContainerHeader';

import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import { Home } from 'pages/Home/Home';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
