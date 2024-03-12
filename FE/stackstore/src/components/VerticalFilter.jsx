function VerticalFilter() {
  return (
    <>
      <div>
        <div className="category">
          <input type="text" placeholder="CATEGORY" />
          <button>Search</button>
          <br />
          <input type="checkbox" name="cat1" id="" />
          <label htmlFor="cat1">Aminos</label>
          <br />
          <input type="checkbox" name="cat2" id="" />
          <label htmlFor="cat2">Protein</label>
        </div>
        <div className="brand">
          <input type="text" placeholder="BRAND" />
          <button>Search</button>
          <br />
          <input type="checkbox" name="b1" id="" />
          <label htmlFor="b1">MyProtein</label>
          <br />
          <input type="checkbox" name="b2" id="" />
          <label htmlFor="b1">ON</label>
        </div>
        <div className="price">Price</div>
        <div className="customerRating">Customer Rating</div>
        <div className="discount">Discount</div>
        <div className="availability">Availibility</div>
        <div className="ConditionalFilter">Conditional Filter</div>
      </div>
    </>
  );
}

export default VerticalFilter;
