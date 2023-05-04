import React from "react";

// Routing
import { Link } from "react-router-dom";

// Rating
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ image, brand, title, rating, price }) => {
  return (
    <div className="col-3">
      <Link to="/" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src={image} alt="product" />
          <img className="img-fluid" src={image} alt="product" />
        </div>

        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title mb-0">{title}</h5>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="product-price">${price}</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="/">
              <img src="/images/prodcompare.svg" alt="compare" />
            </Link>

            <Link to="/">
              <img src="/images/view.svg" alt="view" />
            </Link>

            <Link to="/">
              <img src="/images/add-cart.svg" alt="cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
