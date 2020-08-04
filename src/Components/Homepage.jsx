import React from "react";
import SectionOne from "./SectionOne";
import NavBar from "./NavBar";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default HomePage