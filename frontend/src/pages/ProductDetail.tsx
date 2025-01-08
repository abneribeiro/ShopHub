'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct } from '@/api/api';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  colorVariants: number;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useAppContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id!);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-semibold text-gray-600"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-semibold text-gray-600"
        >
          Product not found
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to products
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.brand}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-6 rounded-full bg-red-500" />
            <div className="w-6 h-6 rounded-full bg-blue-500" />
            <div className="w-6 h-6 rounded-full bg-green-500" />
            <span className="text-sm text-gray-500">{product.colorVariants} color variants available</span>
          </div>
          <Button
            onClick={() => addToCart(product.id)}
            size="lg"
            className="w-full md:w-auto text-lg px-8 py-6"
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;

