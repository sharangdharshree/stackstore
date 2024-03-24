import styles from "./../modules/Navbar.module.css";
import React from "react";
function Navbar() {
  return (
    <header>
      <nav className={styles.header}>
        <span>
          <button>Logo</button>
        </span>

        <span className={styles.categoryWrapper}>
          <button>Category 1</button>
          <button>Category 2</button>
          <button>Category 3</button>
          <button>Category 4</button>
          <button>Category 5</button>
        </span>
        <span>
          <input type="text" name="search" placeholder="Search" />
          <button name="search">SL</button>
        </span>
        <span>
          <button>Profile</button>
          <button>Wishlist</button>
          <button>Cart</button>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
