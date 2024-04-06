import { useEffect, useState } from "react";
import styles from "./../modules/CheckoutHeader.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
function CheckoutHeader() {
  let location = useLocation();
  const [stage, setStage] = useState(1);
  useEffect(() => {
    setStage(
      location.pathname.endsWith("cart")
        ? 1
        : location.pathname.endsWith("address")
        ? 2
        : location.pathname.endsWith("payment")
        ? 3
        : 1
    );
  }, [location]);

  return (
    <>
      <nav style={{ background: "gray", height: "40px" }}>
        <span>
          <Link to={"/"}>Logo</Link>
        </span>
        <span>
          <span>
            <NavLink
              to={"/checkout/cart"}
              className={({ isActive }) =>
                `inline ${isActive ? "text-green-700" : "text-gray-700"} `
              }
            >
              Cart
            </NavLink>
          </span>
          <span>----</span>
          <span>
            {" "}
            {stage > 1 ? (
              <NavLink
                to={"/checkout/address"}
                className={({ isActive }) =>
                  `inline ${isActive ? "text-green-700" : "text-gray-700"}`
                }
              >
                Address
              </NavLink>
            ) : (
              "Address"
            )}
          </span>
          <span>----</span>
          <span>
            {" "}
            {stage > 2 ? (
              <NavLink
                to={"/checkout/payment"}
                className={({ isActive }) =>
                  `inline ${isActive ? "text-green-700" : "text-gray-700"}`
                }
              >
                Payment
              </NavLink>
            ) : (
              "Payment"
            )}
          </span>
        </span>
        <span>Image</span>
      </nav>
    </>
  );
}

export default CheckoutHeader;
