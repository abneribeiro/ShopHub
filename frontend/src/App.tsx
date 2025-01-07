import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <footer className="bg-white shadow-md mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            &copy; 2023 Sneaker Shop. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
