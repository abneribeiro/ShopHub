import React from 'react';
import { useAppContext } from '../context/AppContext';

const Cart: React.FC = () => {
  const { cartItems } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {/* Cart items will be implemented here */}
          <p>{cartItems.length} items in cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

