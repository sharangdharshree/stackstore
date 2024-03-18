import ProductCard from "../ProductCard.jsx";
import VerticalFilter from "../VerticalFilter.jsx";
import dummyData from "../../data/dummyData.js";
import { useEffect, useState } from "react";

function ListPage() {
  // filter options

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([0, 100]);
  const [rating, setRating] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);

  //sort options
  const [sort, setSort] = useState("popularity");

  const [result, setResult] = useState([]);

  const displayResults = (
    <div className="results">
      {result.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );

  useEffect(() => {
    function resultList() {
      let dataSet = [...dummyData];
      dataSet =
        category.length > 0
          ? dataSet.filter((d) => categoryresult(category).includes(d))
          : dataSet.map((d) => d);
      dataSet =
        brand.length > 0
          ? dataSet.filter((d) => brandresult(brand).includes(d))
          : dataSet.map((d) => d);
      dataSet =
        price[0] > 0
          ? dataSet.filter((d) => priceresult(price).includes(d))
          : dataSet.map((d) => d);
      dataSet =
        rating > 0
          ? dataSet.filter((d) => ratingresult(rating).includes(d))
          : dataSet.map((d) => d);
      dataSet =
        discount > 0
          ? dataSet.filter((d) => discountresult(discount).includes(d))
          : dataSet.map((d) => d);
      dataSet = includeOutOfStock
        ? dataSet.filter((d) => includeoutofstockresult().includes(d))
        : dataSet.filter((d) => d.inStock == true);

      setResult(dataSet);
    }

    resultList();
  }, [category, brand, price, rating, discount, includeOutOfStock]);

  console.log("re-render");

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
  results = dummyData.filter(
    (d) =>
      d.price.listprice >= price[0] &&
      (price[1] > 0 ? d.price.listprice <= price[1] : true)
  );

  return results;
}

function ratingresult(rating) {
  let results = [];
  results = dummyData.filter((d) => d.rating.rate >= rating);
  return results;
}

function discountresult(discount) {
  let results = [];
  results = dummyData.filter((d) => d.price.discount >= discount);
  return results;
}

function includeoutofstockresult() {
  return dummyData.map((d) => d);
}
