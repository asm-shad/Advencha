import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Latest Travel Insights & Updates"
        paragraph="Stay informed with the most exciting travel trends, destination highlights, and expert tips. Whether you're planning your next adventure or just exploring possibilities, we've got you covered!!"
      ></SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <NewsCard
          image="/images/n1.jpg"
          title="Top 10 Places to Visit in Australia"
          date="15th November, 2024"
          para="Discover the most breathtaking destinations in Australia, from the Great Barrier Reef to the stunning Sydney Opera House."
        ></NewsCard>

        <NewsCard
          image="/images/n2.jpg"
          title="Best Budget-Friendly European Destinations"
          date="28th October, 2024"
          para="Explore Europe without breaking the bank! Here are the top affordable travel spots for an unforgettable experience."
        ></NewsCard>

        <NewsCard
          image="/images/n3.jpg"
          title="Must-Visit Hidden Gems in Asia"
          date="5th December, 2024"
          para="Uncover Asia's best-kept travel secrets, from tranquil beaches to cultural wonders off the beaten path."
        ></NewsCard>

        <NewsCard
          image="/images/n4.jpg"
          title="How to Plan the Perfect Solo Trip"
          date="20th November, 2024"
          para="Thinking of traveling alone? Here’s everything you need to know for a safe and exciting solo adventure."
        ></NewsCard>
      </div>
    </div>
  );
};

export default News;
