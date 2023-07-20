import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories"

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
