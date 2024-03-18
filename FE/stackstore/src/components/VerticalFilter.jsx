import styles from "./modules/VerticalFilter.module.css";

function VerticalFilter(props) {
  function categoryHandler(e) {
    if (e.target.checked && !props.category.includes(e.target.value)) {
      props.setCategory([...props.category, e.target.value]);
    } else if (!e.target.checked) {
      props.setCategory(props.category.filter((b) => b != e.target.value));
    }
  }

  function brandHandler(e) {
    if (e.target.checked && !props.brand.includes(e.target.value)) {
      props.setBrand([...props.brand, e.target.value]);
    } else if (!e.target.checked) {
      props.setBrand(props.brand.filter((b) => b != e.target.value));
    }
  }
  function priceHandler(e) {
    props.setPrice([e.target.min, e.target.max]);
  }
  function ratingHandler(e) {
    props.setRating(e.target.value);
  }
  function discountHandler(e) {
    props.setDiscount(e.target.value);
  }

  function includeOutOfStockHandler(e) {
    props.setIncludeOutOfStock(e.target.checked);
  }

  return (
    <>
      <nav className={styles.nav}>
        <aside className={styles.sidebar}>
          <div className="category">
            <h4>Category</h4>
            <input
              type="checkbox"
              name="category"
              id=""
              value={"jewelery"}
              onClick={(e) => {
                categoryHandler(e);
              }}
            />
            Jewelery
            <br />
            <input
              type="checkbox"
              name="category"
              id=""
              value={"electronics"}
              onClick={(e) => {
                categoryHandler(e);
              }}
            />
            Electronics
            <br />
            <input
              type="checkbox"
              name="category"
              id=""
              value={"women's clothing"}
              onClick={(e) => {
                categoryHandler(e);
              }}
            />
            Women Clothing
            <br />
            <input
              type="checkbox"
              name="category"
              id=""
              value={"men's clothing"}
              onClick={(e) => {
                categoryHandler(e);
              }}
            />
            Men clothing
            <br />
            <input
              type="checkbox"
              name="category"
              id=""
              value={"Protein"}
              onClick={(e) => {
                categoryHandler(e);
              }}
            />
            Protein
          </div>

          <div className="brand">
            <h4>Brand</h4>
            <input type="text" placeholder="BRAND" />
            <br />
            <input
              type="checkbox"
              name="brand"
              id=""
              value={"MyProtein"}
              onClick={(e) => {
                brandHandler(e);
              }}
            />
            MyProtein
            <br />
            <input
              type="checkbox"
              name="brand"
              id=""
              value={"levis"}
              onClick={(e) => {
                brandHandler(e);
              }}
            />
            Levis
            <br />
            <input
              type="checkbox"
              name="brand"
              id=""
              value={"Optimum Nutrition"}
              onClick={(e) => {
                brandHandler(e);
              }}
            />
            Optimum Nutrition
          </div>

          <div className="price">
            <h4>Price</h4>
            <input
              type="radio"
              name="price"
              min={1}
              max={1000}
              onClick={(e) => {
                priceHandler(e);
              }}
            />
            &#8377;1-&#8377;1000
            <br />
            <input
              type="radio"
              name="price"
              min={1001}
              max={2500}
              onClick={(e) => {
                priceHandler(e);
              }}
            />
            &#8377;1001-&#8377;2500
            <br />
            <input
              type="radio"
              name="price"
              min={2501}
              max={5000}
              onClick={(e) => {
                priceHandler(e);
              }}
            />
            &#8377;2501-&#8377;5000
            <br />
            <input
              type="radio"
              name="price"
              min={5001}
              max={10000}
              onClick={(e) => {
                priceHandler(e);
              }}
            />
            &#8377;5001-&#8377;10000
            <br />
            <input
              type="radio"
              name="price"
              min={10001}
              onClick={(e) => {
                priceHandler(e);
              }}
            />
            Over &#8377;10000
          </div>

          <div className="customerRating">
            <h4>Rating</h4>
            <input
              type="radio"
              name="rating"
              id=""
              onClick={(e) => {
                ratingHandler(e);
              }}
              value="4"
            />
            4&#9733; &#38; Above
            <br />
            <input
              type="radio"
              name="rating"
              id=""
              onClick={(e) => {
                ratingHandler(e);
              }}
              value="3"
            />
            3&#9733; &#38; Above
            <br />
            <input
              type="radio"
              name="rating"
              id=""
              onClick={(e) => {
                ratingHandler(e);
              }}
              value="2"
            />
            2&#9733; &#38; Above
            <br />
            <input
              type="radio"
              name="rating"
              id=""
              onClick={(e) => {
                ratingHandler(e);
              }}
              value="1"
            />
            1&#9733; &#38; Above
          </div>

          <div className="discount">
            <h4>Discount</h4>
            <input
              type="radio"
              name="discount"
              value="10"
              onClick={(e) => {
                discountHandler(e);
              }}
            />
            10&#37; and Above
            <br />
            <input
              type="radio"
              name="discount"
              id=""
              value="25"
              onClick={(e) => {
                discountHandler(e);
              }}
            />
            25&#37; and Above
            <br />
            <input
              type="radio"
              name="discount"
              id=""
              value="50"
              onClick={(e) => {
                discountHandler(e);
              }}
            />
            50&#37; and Above
            <br />
            <input
              type="radio"
              name="discount"
              value="75"
              onClick={(e) => {
                discountHandler(e);
              }}
            />
            75&#37; and Above
          </div>

          {/* <div className="CategoryFilter">
            <h4>Categorical Filter</h4>
          </div> */}

          <div className="availability">
            <h4>Availability</h4>
            <input
              type="checkbox"
              name="stockAvailablity"
              id=""
              onClick={(e) => {
                includeOutOfStockHandler(e);
              }}
            />
            Incude Out of Stock
          </div>
        </aside>
      </nav>
    </>
  );
}

export default VerticalFilter;
