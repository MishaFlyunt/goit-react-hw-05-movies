import { GlobalStyle, Container } from './GlobalStyle';
import React from 'react';
import { Header } from './Header/Header';
// import { NavLink } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Container>
      <Header />

      <GlobalStyle />
    </Container>
  );
};
