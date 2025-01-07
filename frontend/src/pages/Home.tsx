import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductList from '@/components/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <ProductList />
    </div>
  );
};

export default Home;
