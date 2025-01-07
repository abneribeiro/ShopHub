import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextType {
  cartItems: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (productId: string) => {
    setCartItems((prevItems) => [...prevItems, productId]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((id) => id !== productId));
  };

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
