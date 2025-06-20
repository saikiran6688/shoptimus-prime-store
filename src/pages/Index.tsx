
import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <div className="container mx-auto px-4 py-8 space-y-12">
          <CategoryGrid />
          <ProductCarousel 
            title="Top Deals" 
            category="deals"
            bgGradient="from-orange-500 to-red-500"
          />
          <ProductCarousel 
            title="Popular in Kids" 
            category="kids"
            bgGradient="from-purple-500 to-pink-500"
          />
          <ProductCarousel 
            title="Hot Picks in Sports Shoes" 
            category="sports"
            bgGradient="from-blue-500 to-indigo-500"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
