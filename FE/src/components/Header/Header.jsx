import styles from "./../modules/Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className={styles.header} style={{ position: "sticky" }}>
        <span>
          <button>
            <NavLink to="/">Logo</NavLink>
          </button>
        </span>

        <span>
          <input type="text" name="search" placeholder="Search" />
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            name="search"
          >
            SL
          </button>
        </span>

        <span>
          <button>Profile/Login</button>|
          <button>
            <NavLink to="/checkout/cart">Cart</NavLink>
          </button>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
