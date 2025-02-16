import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import React from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading
        heading="Best Hotels for a Perfect Getaway"
        paragraph="Find the perfect place to relax and unwind. From luxury resorts to budget-friendly stays."
      ></SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {/* Hotel Card  */}
        {hotelsData.map((data, idx) => {
          return (
            <div key={idx}>
              <HotelCard hotel={data}></HotelCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
