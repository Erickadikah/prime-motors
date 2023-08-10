import React from "react";
import Navbar from "./components/landingPage/nav";
import Hero from "./components/landingPage/hero";
import TechStacks from "./components/landingPage/tech-stacks";
import OurServices from "./components/landingPage/service";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/styles/landingPage/landing.scss";
import PageFooter from "./components/landingPage/pagefooter";
import Products from "./components/landingPage/products";






function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      {/*<TechStacks />*/}
      <Products />
      <PageFooter />
    </div>
  )
}

export default App
