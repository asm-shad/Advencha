import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* Overlay of Video  */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-70">
        {/* Video  */}
        <video
          src="/images/hero1.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full h-full object-cover"
        ></video>
        {/* Text Content  */}
        <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div data-aos="fade-up">
              <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.5rem] text-white font-bold uppercase">
                EXPLORE THE BEAUTY OF NATURE
              </h1>
              <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5-x]">
                Get the best prices on 2,000,000+ properties, worldwide.
              </p>
            </div>
            {/* Search Box  */}
            <SearchBox></SearchBox>
            <Link
              href="#"
              className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-gradient-to-br from-pink-400 via-red-600 to-purple-700 relative hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-700 hover:to-purple-800 text-white hover:ring-2 hover:ring-offset-2 hover:ring-rose-600 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold">Seach</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
