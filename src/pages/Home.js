import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/Hero/HeroBanner';
import Categories from '../components/Categories/Categories';
import ProductGrid from '../components/Products/ProductGrid';
import Footer from '../components/Footer/Footer';
import { useCart } from '../hooks/useCart';

const Home = () => {
  const { cartItems, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={cartItems} />
      <HeroBanner />
      <Categories />
      <ProductGrid onAddToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Home;