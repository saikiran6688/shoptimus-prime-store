
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `${category} Product ${i + 1}`,
    price: Math.floor(Math.random() * 5000) + 500,
    originalPrice: Math.floor(Math.random() * 7000) + 1000,
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&sig=${i}`,
    discount: Math.floor(Math.random() * 50) + 10
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>/</li>
            <li className="capitalize font-medium">{category}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Under ₹1,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₹1,000 - ₹3,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₹3,000 - ₹5,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Above ₹5,000</span>
                </label>
              </div>
            </div>

            {/* Brand */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Brand</h4>
              <div className="space-y-2">
                {['Nike', 'Adidas', 'Samsung', 'Apple', 'Sony'].map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Rating</h4>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{rating}★ & above</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h1 className="text-2xl font-bold capitalize mb-4 md:mb-0">
                {category} Products ({products.length})
              </h1>
              
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-blue-600">Previous</button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded ${
                      page === 1 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 text-gray-500 hover:text-blue-600">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
