import { Apple, Carrot, Wheat, Egg } from 'lucide-react';
import ProductCard from './ProductCard';
import mango from "@/app/assets/products/Mango.webp";
import tomato from "@/app/assets/products/tomatoes.jpg";
import rice from "@/app/assets/products/redrice.avif";
import egg from "@/app/assets/products/egg.webp";


const ProductCategory = () => {
  const categories = [
    {
      name: 'জৈব ফল',
      icon: <Apple className="h-6 w-6 text-green-600" />,
      href: '#',
    },
    {
      name: 'জৈব শাকসবজি',
      icon: <Carrot className="h-6 w-6 text-green-600" />,
      href: '#',
    },
    {
      name: 'জৈব শস্য',
      icon: <Wheat className="h-6 w-6 text-green-600" />,
      href: '#',
    },
    {
      name: 'জৈব ডিম ও দুগ্ধ',
      icon: <Egg className="h-6 w-6 text-green-600" />,
      href: '#',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'জৈব আম',
      price: '২০০ টাকা/কেজি',
      image: mango,
      category: 'ফল',
    },
    {
      id: 2,
      name: 'জৈব টমেটো',
      price: '৮০ টাকা/কেজি',
      image: tomato,
      category: 'শাকসবজি',
    },
    {
      id: 3,
      name: 'জৈব লাল চাল',
      price: '১২০ টাকা/কেজি',
      image: rice,
      category: 'শস্য',
    },
    {
      id: 4,
      name: 'জৈব ডিম',
      price: '১৫ টাকা/পিস',
      image: egg,
      category: 'ডিম ও দুগ্ধ',
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            আমাদের পণ্য বিভাগ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            প্রকৃতির সেরা উপহার, আপনার সুস্বাস্থ্যের জন্য
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer border border-gray-100"
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-lg font-medium text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            জনপ্রিয় পণ্য
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের গ্রাহকদের সবচেয়ে পছন্দের কিছু পণ্য
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;