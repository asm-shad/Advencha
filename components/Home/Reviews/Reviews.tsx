import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Traveler Reviews & Experiences
          </h1>
          <p className="mt-6 text-gray-200">
            Discover what our happy travelers have to say! From seamless
            bookings to unforgettable experiences, our customers love the
            journeys we create. Let their stories inspire your next adventure!
          </p>
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.92</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white"></FaStar>
                <FaStar className="text-white"></FaStar>
                <FaStar className="text-white"></FaStar>
                <FaStar className="text-white"></FaStar>
                <FaStar className="text-white"></FaStar>
              </div>
            </div>
          </div>
        </div>
        {/* slider  */}
        <div className="overflow-hidden">
          <ReviewSlider></ReviewSlider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
