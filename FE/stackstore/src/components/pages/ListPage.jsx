import ProductCard from "../ProductCard.jsx";
import VerticalFilter from "../VerticalFilter.jsx";
import dummyData from "../../data/dummyData.js";
import { useEffect, useState } from "react";

function ListPage() {
  // filter options

  const [category, setCategory] = useState([""]);
  const [brand, setBrand] = useState([""]);
  const [price, setPrice] = useState([0, 100]);
  const [rating, setRating] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(true);

  //sort options
  const [sort, setSort] = useState("popularity");

  const [result, setResult] = useState([]);

  const displayResults = (
    <div className="results">
      {dummyData.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );

  useEffect(() => {
    function resultList() {
      const categoryResult = categoryresult(category);
      const brandResult = brandresult(brand);
      const priceResult = priceresult(price);
      const ratingResult = ratingresult(rating);
      const discountResult = discountresult(discount);
      const includeOutOfStockResult =
        includeoutofstockresult(includeOutOfStock);
      console.log(categoryResult);
    }

    resultList();
  }, [category, brand, price, rating, discount, includeOutOfStock]);

  return (
    <>
      <div className="root">
        <VerticalFilter
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          setPrice={setPrice}
          setRating={setRating}
          setDiscount={setDiscount}
          setIncludeOutOfStock={setIncludeOutOfStock}
        />
        {displayResults}
        {result}
      </div>
    </>
  );
}

export default ListPage;

function categoryresult(category) {
  let results = [];
  for (let i = 0; i < category.length; i++) {
    results = results.concat(
      dummyData.filter((d) => d.category == category[i])
    );
  }
  return results;
}

function brandresult(brand) {
  let results = [];
  for (let i = 0; i < brand.length; i++) {
    results = results.concat(dummyData.filter((d) => d.brand == brand[i]));
  }
  return results;
}

function priceresult(price) {
  let results = [];
  results = results.concat(
    dummyData.filter(
      (d) => d.price.listprice >= price[0] && d.price.listprice <= price[1]
    )
  );
  return results;
}

function ratingresult(rating) {
  let results = [];
  results = results.concat(dummyData.filter((d) => d.rating.rate >= rating));
  return results;
}

function discountresult(discount) {
  let results = [];
  results = results.concat(
    dummyData.filter((d) => d.price.discount >= discount)
  );
  return results;
}

function includeoutofstockresult(includeOutOfStock) {
  let results = [];
  if (includeOutOfStock) {
    results = results.concat(
      dummyData.filter((d) => d.inStock == true || d.inStock == false)
    );
  } else {
    results = results.concat(dummyData.filter((d) => d.inStock == true));
  }
  return results;
}
