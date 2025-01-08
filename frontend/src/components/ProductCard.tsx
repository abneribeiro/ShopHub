'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

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
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <Link to={`/product/${id}`} className="block relative aspect-square">
        <motion.div
          className="w-full h-full"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4"
          >
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-white text-lg font-bold">${price.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-gray-300 line-through text-sm">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-sm text-gray-300">
                {colorVariants} {colorVariants === 1 ? 'Color' : 'Colors'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(id);
                }}
                className="text-white py-2 px-4 rounded-full flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-200"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

