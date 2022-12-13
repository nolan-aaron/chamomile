import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import DisplayBands from "./components/DisplayBands.js";
import BandAbout from "./components/BandAbout.js";
import Home from "./pages/Home.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:band" element={<DisplayBands />} />
          <Route path="/about/:band" element={<BandAbout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;