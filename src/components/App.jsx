import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Container/ContainerHeader';
import { Home } from 'pages/Home/Home';
// import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        
      </Route>
    </Routes>
  );
};
