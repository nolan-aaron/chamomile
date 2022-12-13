import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import SimilarBands from "./components/SimilarBands.js";
import "./App.css";
import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:band" element={<SimilarBands />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
