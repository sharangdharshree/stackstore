function ProductCard() {
  return (
    <>
      <div className="cardContainer">
        <img
          src="https://static.thcdn.com/productimg/1600/1600/11654647-1954934880530787.jpg"
          alt="product image"
          className="productImage"
        />
        <div className="ratingContainer">
          <span className="rating">3.7</span>
          <span className="starSvg">*</span>
          <span className="ratingCount"> | 1.7k</span>
        </div>
        <div className="productMetaInfo">
          <h3 className="productBrand">MyProtein</h3>
          <h4 className="productName">Whey Protein Isolate</h4>
          <span className="discountedPrice">Rs. 1299</span>
          <span className="basePrice">Rs. 3999</span>
          <span className="discountPercentage">(67% OFF)</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
