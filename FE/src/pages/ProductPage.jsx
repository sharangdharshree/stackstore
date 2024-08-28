import React from "react";
import ProductContainer from "../components/Product/ProductContainer";

function ProductPage() {
  return (
    <>
      <div>
        <ProductContainer />
        <div>Product detail and other info</div>
        <div>Review and Rating</div>
      </div>
    </>
  );
}

export default ProductPage;
