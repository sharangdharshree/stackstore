import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ListPage from "./pages/ListPage.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Checkout/Cart/Cart.jsx";
import Address from "./components/Checkout/Address/Address.jsx";
import Payment from "./components/Checkout/Payment/Payment.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ListPage />} />
      <Route path="/checkout/cart" element={<Cart />} />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/checkout/*" element={<Navigate to="/checkout/cart" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
