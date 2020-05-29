import React from "react";
import NavBar from "./Components/NavBar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from './Components/SectionThree';
import Footer from './Components/Footer';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </React.Fragment>
  );
}

export default App;
