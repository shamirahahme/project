// components/ProductCard.js
import React from 'react';
import PropTypes from 'prop-types';
//import './Home.css'; // Make sure to import your CSS

const ProductCard = ({ image, price, name, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ProductCard;
