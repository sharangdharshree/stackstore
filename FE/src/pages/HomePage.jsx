import React from "react";
import Home from "./../components/Home/Home.jsx";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Home />
      <Link to={"/products"}>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          All Products
        </button>
      </Link>
    </>
  );
}

export default HomePage;
