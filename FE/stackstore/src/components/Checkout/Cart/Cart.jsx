import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../modules/Cart.module.css";
function Cart() {
  return (
    <div className={styles.cartbody}>
      <div className={styles.left}>
        <div className="address">Select Address</div>
        <div className="offer">Available Offers</div>
        <div className="actions">Action Options</div>
        <div className="items">Items in the Cart</div>
      </div>
      <div className={styles.right}>
        <div className="coupon">Coupon code apply</div>
        <div className="priceblock">Comprehensive Price Block</div>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          <Link to={"/checkout/address"}> Place Order</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
