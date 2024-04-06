import React from "react";
import { Link } from "react-router-dom";
import styles from "./../modules/CheckoutFooter.module.css";

function CheckoutFooter() {
  return (
    <>
      <footer>
        <div>Images</div>
        <div>
          <Link to={"/"}> Need Help? Contact Us</Link>
        </div>
      </footer>
    </>
  );
}

export default CheckoutFooter;
