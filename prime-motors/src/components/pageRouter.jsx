import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingPage/landingPage';
import Form from '../components/form'

const PageRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/form' element={Form} />
    <Route path="/" element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
