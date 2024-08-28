import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProductContainer() {
  return (
    <>
      <div>
        <Breadcrumbs />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="left"
            style={{
              width: "500px",
              height: "500px",
              paddingRight: "5px",
              marginRight: "20px",
            }}
          >
            <img src={product.image} alt="product image" />
          </div>
          <div
            className="right"
            style={{ paddingLeft: "5px", marginLeft: "20px" }}
          >
            <div>{prod5uct.category[product.category.length - 1]}</div>
            <div>
              <h1>{product.title}</h1>
            </div>
            <div>By {product.brand}</div>
            <div>
              Star Represntation {product.reviewRating.avgRating} (
              {product.reviewRating.totalRating} Reviews)
            </div>
            <div>
              <div>MRP: {product.price.mrp}</div>
              <div>
                Price: &#8377;{product.price.listprice} {product.price.discount}
                % off
              </div>
            </div>
            <div>
              <span>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min={1}
                  placeholder="Quantity"
                />
              </span>
              <span>
                <button>Add To Cart</button>
              </span>
            </div>
            <div>
              <div>Weight</div>
              <div>
                <button>1KG</button>
                <button>2.5KG</button>
                <button>5KG</button>
              </div>
            </div>
            <div>
              <div>Flavour</div>
              <div>
                <button>Chocolate</button>
                <button>Banana</button>
                <button>Brownie</button>
              </div>
            </div>
            <div>Special Offers</div>
            <div>
              <h5>Delivery and Services</h5>
              <div>Free Shipping</div>
              <div>Cash on Delivery Available</div>
              <div>14 days Return policy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;

const product = {
  category: ["SportsNutrition", "Protein", "Whey"],
  productId: "10111213",
  name: "MyProtein Impact Whey",
  title: "Myprotein Impact Whey Protein, 2.5 kg (5.5 lb), Chocolate Smooth",
  brand: "Myprotein",
  description: "Highest-quality British-manufactured product",
  sku: "2103456-01",
  isVariant: {
    isVariant: "no",
    variantOf: "na",
  },
  hasVariant: {
    hasVariant: "yes",
    variants: ["0111213-01", "0111213-02", "0111213-03"],
  },
  image:
    "https://static.thcdn.com/productimg/1600/1600/11654606-2084934870544327.jpg",
  dimension: {
    height: "",
    width: "",
    length: "",
  },
  weight: "1kg",
  reviewRating: {
    avgRating: "4.49",
    totalRating: "8682",
    highestRating: "5",
    lowestRating: "1",
  },
  price: {
    mrp: "4999",
    listprice: "4199",
    discount: "16",
  },
  aggregateOffer: {
    pricrCurrency: "INR",
    highPrice: "4999",
    lowPrice: "3500",
    offerCount: "2",
    offers: ["30% off on using GooglePay", "20% off on using SBI Debit Card"],
  },
  keyword: ["Low Sugar", "Vegetarian", "Low Fat"],
};
