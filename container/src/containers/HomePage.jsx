import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Container App</h1>
      <Link to="counter">Go to Counter App</Link>
    </div>
  );
};

export default HomePage;
