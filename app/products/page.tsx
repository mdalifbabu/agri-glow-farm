import { Apple, Carrot, Wheat, Egg, Filter } from 'lucide-react';
import ProductCard from '@/app/components/ProductCard';

const ProductsPage = () => {
  const categories = [
    {
      name: 'সকল পণ্য',
      icon: <Apple className="h-5 w-5 mr-2" />,
      count: 48,
    },
    {
      name: 'জৈব ফল',
      icon: <Apple className="h-5 w-5 mr-2" />,
      count: 12,
    },
    {
      name: 'জৈব শাকসবজি',
      icon: <Carrot className="h-5 w-5 mr-2" />,
      count: 15,
    },
    {
      name: 'জৈব শস্য',
      icon: <Wheat className="h-5 w-5 mr-2" />,
      count: 8,
    },
    {
      name: 'জৈব ডিম ও দুগ্ধ',
      icon: <Egg className="h-5 w-5 mr-2" />,
      count: 13,
    },
  ];

  const products = [
    {
      id: 1,
      name: 'জৈব আম',
      price: '২০০ টাকা/কেজি',
      image: '/placeholder-product.jpg',
      category: 'ফল',
    },
    {
      id: 2,
      name: 'জৈব টমেটো',
      price: '৮০ টাকা/কেজি',
      image: '/placeholder-product.jpg',
      category: 'শাকসবজি',
    },
    {
      id: 3,
      name: 'জৈব লাল চাল',
      price: '১২০ টাকা/কেজি',
      image: '/placeholder-product.jpg',
      category: 'শস্য',
    },
    {
      id: 4,
      name: 'জৈব ডিম',
      price: '১৫ টাকা/পিস',
      image: '/placeholder-product.jpg',
      category: 'ডিম ও দুগ্ধ',
    },
    {
      id: 5,
      name: 'জৈব কলা',
      price: '৬০ টাকা/ডজন',
      image: '/placeholder-product.jpg',
      category: 'ফল',
    },
    {
      id: 6,
      name: 'জৈব আলু',
      price: '৪০ টাকা/কেজি',
      image: '/placeholder-product.jpg',
      category: 'শাকসবজি',
    },
    {
      id: 7,
      name: 'জৈব গমের আটা',
      price: '৮০ টাকা/কেজি',
      image: '/placeholder-product.jpg',
      category: 'শস্য',
    },
    {
      id: 8,
      name: 'জৈব দুধ',
      price: '৭০ টাকা/লিটার',
      image: '/placeholder-product.jpg',
      category: 'ডিম ও দুগ্ধ',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">আমাদের পণ্য</h1>
          <p className="text-gray-600">
            প্রকৃতির সেরা উপহার, আপনার সুস্বাস্থ্যের জন্য
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-green-600" />
                ফিল্টার
              </h3>

              <div className="mb-6">
                <h4 className="font-medium mb-3">বিভাগ</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-600">
                        <span className="flex items-center">
                          {category.icon}
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-3">দাম</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-all"
                      name="price"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="price-all" className="ml-2 text-gray-700">
                      সকল
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-low"
                      name="price"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="price-low" className="ml-2 text-gray-700">
                      ০ - ১০০ টাকা
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-medium"
                      name="price"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="price-medium" className="ml-2 text-gray-700">
                      ১০০ - ৩০০ টাকা
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-high"
                      name="price"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="price-high" className="ml-2 text-gray-700">
                      ৩০০+ টাকা
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;