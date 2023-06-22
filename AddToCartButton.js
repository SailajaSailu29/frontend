import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCartButton = () => {
  const handleAddToCart = () => {
    // Logic to add item to the cart
    console.log('Item added to cart!');
  };

  return (
    <button onClick={handleAddToCart}>
      <FaShoppingCart /> Add to Cart
    </button>
  );
};

export default AddToCartButton;
