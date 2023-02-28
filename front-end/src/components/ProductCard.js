import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ image, name, price }) {
  return (
    <>
      <div>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt=""
        />
      </div>

      <div>
        <h5
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </h5>

        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price}`}
        </p>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
