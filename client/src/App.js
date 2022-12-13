import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import SimilarBands from "./components/SimilarBands.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:band" element={<SimilarBands />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
