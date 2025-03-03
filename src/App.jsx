import React from "react";
import Nav from "./components/Header";
import Herotop from "./components/HeroTop/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Categories from "./components/Categories/index.jsx";
import Banner from "./components/Banner/index.jsx";
import Recommend from "./components/Tets.jsx";

const App = () => {
  return (
    <div>
      <Herotop />
      <Nav />
      <Hero />
      <Categories />
      <Banner />
      <Recomend />
    </div>
  );
};

export default App;
