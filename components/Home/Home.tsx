import React from "react";
import Hero from "./Hero.tsx/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Destination></Destination>
      <Hotel></Hotel>
      <WhyChoose></WhyChoose>
      <Reviews></Reviews>
      <News></News>
    </div>
  );
};

export default Home;
