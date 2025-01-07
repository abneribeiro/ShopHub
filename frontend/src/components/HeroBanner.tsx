import React from 'react';
import { Button } from './ui/button';

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Sneaker Shop</h2>
        <p className="text-xl mb-8">Discover the latest trends in sneakers and step up your style game!</p>
        <Button variant="secondary" size="lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
