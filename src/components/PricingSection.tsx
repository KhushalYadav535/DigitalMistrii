import React from 'react';

const services = [
  { name: 'AC Installation', price: 1500 },
  { name: 'Tap (Toti) Installation', price: 200 },
  { name: 'Switch & Holder Fixing', price: 250 },
  { name: 'General Plumbing', price: 350 },
  { name: 'Minor Electrical Work', price: 50 },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transparent <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Upfront prices for our most popular home services. All prices are in <b>INR (₹)</b> and may vary by location or complexity.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-xl font-semibold text-gray-900 mb-2">{service.name}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹{service.price}</div>
              <div className="text-sm text-gray-500">Starting at</div>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          For a full quote or custom service, please contact us. Prices are indicative and may vary.
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 