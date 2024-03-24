import PropTypes from "prop-types";
import styles from "./../modules/ProductCard.module.css";

function ProductCard(props) {
  const listprice = props.product.price.listprice;
  const markprice = props.product.price.markprice;
  const discount = markprice - listprice;
  const discountpercentage = Math.round((discount * 100) / markprice);

  return (
    <>
      <div className={styles.cardContainer}>
        <img
          src={props.product.image}
          alt="product image"
          className={styles.productImage}
        />
        <div className={styles.ratingContainer}>
          <span className={styles.rating}>{props.product.rating.rate}</span>
          <span className={styles.starSvg}>*</span>
          <span className={styles.ratingCount}>
            {" "}
            | {props.product.rating.count}
          </span>
        </div>
        <div className={styles.productMetaInfo}>
          <h3 className={styles.productBrand}>{props.product.title}</h3>
          <span className={styles.listPrice}>
            Rs. {props.product.price.listprice}
          </span>
          <span className={styles.discountPercentage}>
            &#40;{discountpercentage}&#37;off &#41;
          </span>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
