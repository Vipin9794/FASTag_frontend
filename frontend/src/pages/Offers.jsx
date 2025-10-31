
import { FaGift } from "react-icons/fa";

const Offers = () => {
  const offers = [
    {
      title: "WELLCOME50%",
      description: "Get instant 50% off",
      code: "Valid Till 25 Oct 2025",
    },
    {
      title: "WELLCOME20%",
      description: "Get instant 20% off",
      code: "Valid Till 30 Nov 2025",
    },
  ];

  return (
    <div className="mt-16 px-4">
      <div className="shadow-md rounded-xl p-4 bg-white">
        {/* Header with icon */}
        <div className="flex items-center gap-2 mb-4">
          <FaGift className="text-blue-500 text-xl" />
          <h3 className="text-xl font-semibold text-gray-800">
            Exclusive Offers
          </h3>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="p-5 hover:bg-blue-50 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transform transition-all duration-500 text-center"
            >
              {/* Floating Animated Gift */}
              <FaGift className="text-blue-500 text-4xl mx-auto mb-3 animate-float" />

              <h3 className="font-semibold text-gray-800 text-lg">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
              <p className="text-sm text-white bg-green-600 inline-block mt-3 px-3 py-1 rounded-md">
                {offer.code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;

