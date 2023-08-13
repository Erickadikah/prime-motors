import React from 'react';
import PageFooter from "./pagefooter";
import Products from "./products";
import Navbar from "./nav";
import Hero from "./hero";
import OurServices from "./service";
import Form from './form'

const LandingPage = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <OurServices />
      <Products />
      {/*<Form /> */} 
      <PageFooter />
    </div>
  );
}

export default LandingPage;
