import React from 'react';
import { Product } from '../types';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ComparisonProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

const Comparison: React.FC<ComparisonProps> = ({ products, onRemove, onClear }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={48} className="text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">No Products Selected</h2>
        <p className="text-gray-500 mb-8">Select products from the catalog to compare their specifications.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Assumes Products are available elsewhere or controlled by parent
          className="text-brand-600 font-semibold hover:underline"
        >
          Go back to Products
        </button>
      </div>
    );
  }

  const specs = [
    { label: 'Price', key: 'price', format: (v: any) => `₹${v.toLocaleString()}` },
    { label: 'Capacity', key: 'capacity' },
    { label: 'Filtration Stages', key: 'filtrationStages', format: (v: any) => `${v} Stages` },
    { label: 'Warranty', key: 'warranty' },
    { label: 'Description', key: 'description' },
  ];

  return (
    <section className="py-12 bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Comparison</h1>
          <button 
            onClick={onClear}
            className="text-red-500 font-medium text-sm hover:text-red-700 border border-red-200 bg-red-50 px-4 py-2 rounded-lg transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full bg-white shadow-lg rounded-xl border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-r bg-slate-50 min-w-[200px] sticky left-0 z-10 font-semibold text-gray-600">Feature</th>
                {products.map(product => (
                  <th key={product.id} className="p-6 border-b min-w-[250px] relative text-left align-top">
                    <button 
                      onClick={() => onRemove(product.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1"
                      title="Remove product"
                    >
                      <X size={20} />
                    </button>
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mx-auto mb-4 mix-blend-multiply" />
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{product.name}</h3>
                    {product.isFeatured && <span className="bg-brand-100 text-brand-700 text-xs px-2 py-1 rounded font-bold">Featured</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, idx) => (
                <tr key={spec.key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-4 border-r font-medium text-gray-500 sticky left-0 bg-inherit z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    {spec.label}
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="p-4 border-b text-gray-900">
                      {/* @ts-ignore */}
                      {spec.format ? spec.format(product[spec.key]) : product[spec.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4 border-r font-medium text-gray-500 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Key Features</td>
                {products.map(product => (
                  <td key={product.id} className="p-4 border-b">
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;