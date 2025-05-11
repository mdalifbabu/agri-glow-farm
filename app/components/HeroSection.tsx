import { Sun, Check, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const features = [
    '১০০% জৈব সার্টিফাইড',
    'কেমিক্যাল মুক্ত',
    'স্থানীয় কৃষকদের থেকে',
    'তাজা ও পুষ্টিকর',
  ];

  return (
    <section className="bg-gradient-to-r from-amber-100 to-amber-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              প্রকৃতির আলো <span className="text-amber-600">আপনার পাতে</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              AgriGlowFarm থেকে জৈব পণ্যের বিশুদ্ধতা উপভোগ করুন। আমাদের পণ্যগুলো
              সম্পূর্ণ প্রাকৃতিক এবং রাসায়নিক মুক্ত।
            </p>
            <div className="mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <Link
                href="/products"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium flex items-center"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                পণ্য দেখুন
              </Link>
              <Link
                href="#"
                className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-md font-medium"
              >
                আরো জানুন
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-amber-200 rounded-2xl h-96 w-full"></div>
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Sun className="h-8 w-8 text-amber-600 mr-2" />
                  <div>
                    <p className="font-bold text-gray-800">১০০% জৈব</p>
                    <p className="text-sm text-gray-600">প্রমাণিত মান</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;