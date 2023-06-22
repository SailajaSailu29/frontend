import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductItem = () => {
  return (
    <div>
      {/* Product details */}
      <h2>Product Name</h2>
      <p>Product Description</p>

      {/* Add to Cart button */}
      <AddToCartButton />
    </div>
  );
};

export default ProductItem;
