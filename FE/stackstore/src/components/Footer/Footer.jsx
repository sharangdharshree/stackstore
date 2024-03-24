import React from "react";
import styles from "./../modules/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className="about">
        <h5>ABOUT</h5>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
      </div>
      <div className="quicklink">
        <h5>QUICK LINKS</h5>
        <a href="#">Your Account</a>
        <a href="#">Your Order</a>
        <a href="#">Track Order</a>
        <a href="#">Returns</a>
      </div>
      <div className="connect">
        <h5>CONNECT WITH US</h5>
        <a href="#">X</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
      <div className="logo">
        <p>Some Logo here</p>
        <p>Some Logo here</p>
      </div>
    </div>
  );
}

export default Footer;
