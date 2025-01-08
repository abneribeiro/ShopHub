import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '@/components/Header';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-200 scroll-smooth">
        {/* <Header /> */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sneaker Shop. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
