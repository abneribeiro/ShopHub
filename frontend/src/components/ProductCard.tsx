import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  colorVariants: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  colorVariants = 1
}) => {
  const { addToCart } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-4 cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-sm">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500">
        {colorVariants} Different Colors
      </p>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => addToCart(id)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;

