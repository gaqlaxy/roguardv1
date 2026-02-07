import React, { useState } from 'react';
import { PRODUCTS, formatPrice } from '../constants';
import { Product, ViewState } from '../types';
import { ArrowRight, Eye, Star, Scale } from 'lucide-react';
import ProductModal from './ProductModal';

interface ProductsProps {
  viewMode: ViewState;
  onViewAll: () => void;
  selectedForCompare: string[];
  toggleCompare: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ viewMode, onViewAll, selectedForCompare, toggleCompare }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // If on Home view, show only top 3 featured. If on All view, show everything.
  const displayProducts = viewMode === 'HOME' 
    ? PRODUCTS.filter(p => p.isFeatured).slice(0, 3) 
    : PRODUCTS;

  const title = viewMode === 'HOME' ? "Featured Products" : "All Products";
  const subtitle = viewMode === 'HOME' 
    ? "Discover our most popular water purification systems designed for modern homes." 
    : "Explore our complete range of RO systems catering to every need and budget.";

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Our Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
            <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
          </div>
          
          {viewMode === 'HOME' && (
            <button 
              onClick={onViewAll}
              className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors mt-6 md:mt-0"
            >
              View All Products <ArrowRight size={20} className="ml-2" />
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => {
            const isSelected = selectedForCompare.includes(product.id);
            return (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 p-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Bestseller
                    </div>
                  )}

                  {/* Compare Checkbox */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompare(product.id);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors ${
                        isSelected 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                      }`}
                    >
                      <Scale size={14} />
                      {isSelected ? 'Selected' : 'Compare'}
                    </button>
                  </div>
                  
                  {/* Overlay Action */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center"
                     >
                       <Eye size={18} className="mr-2" /> Quick View
                     </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-400 ml-2">(42 reviews)</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Price</span>
                      <span className="text-lg font-bold text-brand-700">{formatPrice(product.price)}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="text-brand-600 font-semibold text-sm hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {viewMode === 'HOME' && (
          <div className="mt-12 text-center md:hidden">
             <button 
              onClick={onViewAll}
              className="inline-flex items-center bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            >
              View All Products <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Products;
