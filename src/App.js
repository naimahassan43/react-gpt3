import React from "react";
import {
  Footer,
  Blog,
  Features,
  GPT3,
  Banner,
  Possibility,
} from "./containers";
import { Brand, CTA, NavBar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Banner />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
