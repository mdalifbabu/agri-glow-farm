import { ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  image: any;
  category: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
      <div className="bg-gray-100 h-48 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="text-lg font-medium text-gray-800 mt-2">
          {product.name}
        </h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
              fill={i < 4 ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">(১২)</span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-green-600 font-bold">{product.price}</span>
          <button className="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;