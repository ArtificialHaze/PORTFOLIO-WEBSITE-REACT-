import "./App.css";
import React from "react";
import Home from "./Home";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const App = () => {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
};

export default App;
