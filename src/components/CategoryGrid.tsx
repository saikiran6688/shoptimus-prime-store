
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      name: "Shop Men",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      link: "/category/men"
    },
    {
      name: "Shop Women",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      gradient: "from-pink-500 to-rose-600",
      link: "/category/women"
    },
    {
      name: "Shop Kids",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      gradient: "from-yellow-400 to-orange-500",
      link: "/category/kids"
    },
    {
      name: "Kitchen Essentials",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-600",
      link: "/category/kitchen"
    },
    {
      name: "Latest Mobiles",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      gradient: "from-purple-600 to-indigo-700",
      link: "/category/mobiles"
    },
    {
      name: "Sports & Fitness",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      gradient: "from-red-500 to-pink-600",
      link: "/category/sports"
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
        Shop by Category
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative h-64 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}></div>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold text-center px-4">
                {category.name}
              </h3>
            </div>
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
