import React from "react";
import NavBar from "./Components/NavBar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from './Components/SectionThree'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </React.Fragment>
  );
}

export default App;
