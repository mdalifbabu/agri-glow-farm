import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                আমাদের নিউজলেটার সাবস্ক্রাইব করুন
              </h2>
              <p className="text-amber-100 mb-6">
                নতুন পণ্য, বিশেষ অফার এবং স্বাস্থ্য টিপস সম্পর্কে সর্বপ্রথম জানতে
                AgriGlowFarm এর নিউজলেটার সাবস্ক্রাইব করুন।
              </p>
              <div className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-amber-300" />
                  </div>
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল ঠিকানা"
                    className="pl-10 pr-4 py-3 w-full rounded-l-md focus:outline-none text-gray-800"
                  />
                </div>
                <button className="bg-amber-800 hover:bg-amber-900 px-6 py-3 rounded-r-md font-medium flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-amber-500 rounded-xl h-48 w-full flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2">AgriGlowFarm কমিউনিটি</h3>
                  <p className="text-amber-100">
                    ১০,০০০+ সদস্য আমাদের নিউজলেটার গ্রহণ করছেন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;