import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "counter/Counter";
import HomePage from "../containers/HomePage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="counter" element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
