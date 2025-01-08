import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const { cartItems, isLoggedIn } = useAppContext();

  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          Sneaker Shop
        </Link>
        <nav className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/profile">
              <Button variant="ghost">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="ghost">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
          <Link to="/cart">
            <Button variant="default">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart ({cartItems.length})
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
