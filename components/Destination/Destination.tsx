import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading
        heading="Discovering Popular Destinations"
        paragraph="Explore stunning places filled with beauty, culture, and adventure. Your next journey awaits!"
      ></SectionHeading>
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
      {/* Slider  */}
      <DestinationSlider></DestinationSlider>
      
      </div>
    </div>
  );
};

export default Destination;
