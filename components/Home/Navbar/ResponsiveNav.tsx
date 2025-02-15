"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleNavClose = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={handleNavShow}></Nav>
      <MobileNav showNav={showNav} closeNav={handleNavClose}></MobileNav>
    </div>
  );
};

export default ResponsiveNav;
