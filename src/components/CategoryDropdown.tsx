
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoryDropdownProps {
  category: {
    name: string;
    subcategories: string[];
  };
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={`/category/${category.name.toLowerCase()}`}
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 block"
      >
        {category.name}
      </Link>
      
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg mt-1 min-w-48 z-50 border animate-fade-in">
          <div className="py-2">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory}
                to={`/category/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {subcategory}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
