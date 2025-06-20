
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import CategoryDropdown from './CategoryDropdown';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Men', subcategories: ['Shirts', 'Trousers', 'Shoes', 'Accessories'] },
    { name: 'Women', subcategories: ['Dresses', 'Sarees', 'Shoes', 'Accessories'] },
    { name: 'Kids', subcategories: ['Boys Wear', 'Girls Wear', 'Toys', 'Shoes'] },
    { name: 'Books', subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics'] },
    { name: 'Mobiles', subcategories: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi'] },
    { name: 'Laptops', subcategories: ['Dell', 'HP', 'Lenovo', 'Apple'] },
    { name: 'Sports', subcategories: ['Cricket', 'Football', 'Fitness', 'Outdoor'] },
    { name: 'Furniture', subcategories: ['Sofa', 'Beds', 'Tables', 'Storage'] },
    { name: 'Home', subcategories: ['Decor', 'Lighting', 'Bedding', 'Bath'] },
    { name: 'Kitchen', subcategories: ['Cookware', 'Appliances', 'Storage', 'Dining'] }
  ];

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                EcoMart
              </span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-md hover:shadow-lg transition-all">
                Search
              </button>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden md:block">Account</span>
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden md:block">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Categories */}
          <nav className="hidden md:flex items-center space-x-8 py-3 border-t">
            {categories.map((category) => (
              <CategoryDropdown key={category.name} category={category} />
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
