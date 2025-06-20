
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  discount?: number;
}

interface ProductCarouselProps {
  title: string;
  category: string;
  bgGradient: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, category, bgGradient }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      price: 1299,
      originalPrice: 1999,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      discount: 35
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
      discount: 38
    },
    {
      id: 3,
      name: "Kids Playing Set",
      price: 899,
      originalPrice: 1299,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop",
      discount: 31
    },
    {
      id: 4,
      name: "Kitchen Appliance",
      price: 5999,
      originalPrice: 7999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
      discount: 25
    },
    {
      id: 5,
      name: "Sports Shoes",
      price: 3299,
      originalPrice: 4999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop",
      discount: 34
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 1799,
      originalPrice: 2499,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      discount: 28
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8">
      <div className={`bg-gradient-to-r ${bgGradient} rounded-xl p-6 mb-6`}>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
