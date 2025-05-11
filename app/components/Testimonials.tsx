import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'রহিমা আক্তার',
      role: 'গৃহিণী',
      content:
        'প্রাকৃতিকের জৈব পণ্যগুলো সত্যিই অসাধারণ। টমেটোগুলো এমন স্বাদ যা অনেকদিন পর আবার পেলাম।',
      rating: 5,
    },
    {
      id: 2,
      name: 'আনিসুর রহমান',
      role: 'সফটওয়্যার ইঞ্জিনিয়ার',
      content:
        'আমার পরিবারের স্বাস্থ্যের কথা ভেবে এখন শুধু প্রাকৃতিক থেকে জৈব পণ্য কিনি। মান ও স্বাদ দুটোই ভালো।',
      rating: 4,
    },
    {
      id: 3,
      name: 'তানিয়া ইসলাম',
      role: 'পুষ্টিবিদ',
      content:
        'আমার ক্লায়েন্টদের জন্য সবসময় প্রাকৃতিকের পণ্য সুপারিশ করি। তাদের জৈব সার্টিফিকেশন ও মান নিয়ন্ত্রণ বিশ্বস্ত।',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            আমাদের গ্রাহকদের মতামত
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের সন্তুষ্ট গ্রাহকরা যা বলেছেন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <Quote className="h-8 w-8 text-green-200 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="bg-green-100 h-10 w-10 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;