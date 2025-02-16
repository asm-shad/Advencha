"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTripadvisor } from "react-icons/lia";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg
          ? "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 shadow-md"
          : "fixed"
      } transition-all duration-200 h-[8vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo  */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-red-600 to-purple-700 rounded-full flex items-center justify-center flex-col">
            <LiaTripadvisor className="w-6 h-6 text-white"></LiaTripadvisor>
          </div>
          <h1 className="text-xl md:text-2xl bg-gradient-to-r from-blue-950 via-blue-700 to-blue-600 bg-clip-text text-transparent uppercase font-bold rancho-font">
            Advencha
          </h1>
        </div>
        {/* NavLink  */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, idx) => {
            return (
              <Link href={link.url} key={idx}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Button  */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-white text-base bg-gradient-to-br from-pink-400 via-red-600 to-purple-700 transition-all duration-200 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-rose-600 ease-out">
            Book Now
          </button>
          {/* Burger Menu  */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          ></HiBars3BottomRight>
        </div>
      </div>
    </div>
  );
};

export default Nav;
