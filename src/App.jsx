import React from "react";
import Nav from "./components/Header";
import Herotop from "./components/HeroTop/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Categories from "./components/Categories/index.jsx";
import Banner from "./components/Banner/index.jsx";
import LandingPage from "./components/PlanTrip/index.jsx";
import PopularDestinations from "./components/TopDestination";
import RecentGallery from "./components/gallarey/index.jsx";

const App = () => {
  return (
    <div>
      <Herotop />
      <Nav />
      <Hero />
      <Categories />
      <Banner />
      <LandingPage />
      <PopularDestinations />
      <RecentGallery />
    </div>
  );
};

export default App;
