import { Leaf, Users, Award, Truck } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: '১০০% জৈব',
      description: 'আমাদের সকল পণ্য জৈব সার্টিফাইড এবং কেমিক্যাল মুক্ত',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'স্থানীয় কৃষক',
      description: 'আমরা স্থানীয় কৃষকদের সাথে সরাসরি কাজ করি',
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'মান নিশ্চিত',
      description: 'সর্বোচ্চ মান নিশ্চিত করতে কঠোর QC প্রক্রিয়া',
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: 'দ্রুত ডেলিভারি',
      description: 'অর্ডার করার ২৪ ঘন্টার মধ্যে ঢাকায় ডেলিভারি',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            প্রাকৃতিক - জৈব পণ্যের বিশ্বস্ত উৎস
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              আমাদের গল্প
            </h2>
            <p className="text-gray-600 mb-4">
              ২০১৫ সালে প্রাকৃতিক যাত্রা শুরু করে একটি সহজ লক্ষ্য নিয়ে - মানুষকে
              প্রকৃতিক জৈব পণ্য সরবরাহ করা যা তাদের স্বাস্থ্য ও পরিবেশের জন্য
              ভালো।
            </p>
            <p className="text-gray-600 mb-4">
              আমরা বাংলাদেশের বিভিন্ন অঞ্চলের কৃষকদের সাথে সরাসরি কাজ করি যারা
              ঐতিহ্যবাহী পদ্ধতিতে জৈব চাষাবাদ করে। আমাদের দল নিয়মিতভাবে তাদের
              খামার পরিদর্শন করে এবং মান নিয়ন্ত্রণ করে।
            </p>
            <p className="text-gray-600">
              আজ, প্রাকৃতিক দেশের শীর্ষস্থানীয় জৈব পণ্য সরবরাহকারীদের মধ্যে
              একটি এবং আমরা আমাদের গ্রাহকদের বিশ্বস্ততা নিয়ে গর্বিত।
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-96"></div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            কেন আমাদের পণ্য বেছে নিবেন?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl h-96"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              আমাদের মিশন
            </h2>
            <p className="text-gray-600 mb-4">
              আমাদের মিশন হল টেকসই কৃষি পদ্ধতির মাধ্যমে উৎপাদিত উচ্চ মানের জৈব
              পণ্য সরবরাহ করা যা মানুষের স্বাস্থ্য ও পরিবেশের জন্য ভালো।
            </p>
            <p className="text-gray-600 mb-4">
              আমরা বিশ্বাস করি যে প্রতিটি মানুষ প্রকৃতিক, রাসায়নিকমুক্ত খাদ্যের
              যোগ্য। আমাদের লক্ষ্য হল জৈব পণ্য সবার নাগালের মধ্যে আনা।
            </p>
            <p className="text-gray-600">
              আমরা শুধু পণ্য বিক্রি করি না, আমরা একটি স্বাস্থ্যকর জীবনযাপনের
              সংস্কৃতি গড়ে তুলতে চাই।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;