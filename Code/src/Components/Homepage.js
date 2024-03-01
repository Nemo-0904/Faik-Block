import React from "react";
import MainText from "./MainText";
import Circle from "./Circle";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Navbarpage from "./Navbarpage";
import Index from "./horizontal-scroll";
import Map from "./Statistics";

const Homepage = () => {
  return (
    <>
      <Navbarpage />
      <MainText />
      <Circle />
      <Index />
      <Map />
      <Aboutus />
      <Footer />
    </>
  );
};

export default Homepage;
