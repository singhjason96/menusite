import React from "react";
import NavBar from "./Components/NavBar";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import Footer from "./Components/Footer";
import { FoodPage } from "./Data/FoodData";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from './Components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/'>
      <HomePage />
    </Route>
      <Route path="/add">
        <FoodPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
