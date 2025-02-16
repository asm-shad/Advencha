import React from "react";
import Hero from "./Hero.tsx/Hero";
import Destination from "../Destination/Destination";
import Hotel from "./Hotel/Hotel";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Destination></Destination>
      <Hotel></Hotel>
    </div>
  );
};

export default Home;
