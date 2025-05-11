import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Phone,
    Mail,
    MapPin,
    Sun,
  } from 'lucide-react';
  import Link from 'next/link';
  
  const Footer = () => {
    const links = [
      {
        title: 'লিংক',
        items: [
          { name: 'হোম', href: '/' },
          { name: 'পণ্য', href: '/products' },
          { name: 'আমাদের সম্পর্কে', href: '/about' },
          { name: 'যোগাযোগ', href: '#' },
        ],
      },
      {
        title: 'পণ্য',
        items: [
          { name: 'জৈব ফল', href: '#' },
          { name: 'জৈব শাকসবজি', href: '#' },
          { name: 'জৈব শস্য', href: '#' },
          { name: 'জৈব ডিম ও দুগ্ধ', href: '#' },
        ],
      },
      {
        title: 'সাপোর্ট',
        items: [
          { name: 'সচরাচর জিজ্ঞাসা', href: '#' },
          { name: 'প্রাইভেসি পলিসি', href: '#' },
          { name: 'শর্তাবলী', href: '#' },
          { name: 'পেমেন্ট মেথড', href: '#' },
        ],
      },
    ];
  
    return (
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-amber-400" />
                <span className="ml-2 text-xl font-bold">AgriGlowFarm</span>
              </div>
              <p className="text-gray-300 mb-4">
                প্রকৃতির আলো আপনার পাতে। জৈব পণ্যের বিশুদ্ধতা উপভোগ করুন।
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
  
            {links.map((link, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-4">{link.title}</h3>
                <ul className="space-y-2">
                  {link.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
  
            <div>
              <h3 className="text-lg font-medium mb-4">যোগাযোগ</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    ১২৩ জৈব স্ট্রিট, ঢাকা - ১২১২, বাংলাদেশ
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-300">+৮৮০ ১৭১২ ৩৪৫৬৭৮</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-300">info@agriglowfarm.com</span>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AgriGlowFarm. সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;