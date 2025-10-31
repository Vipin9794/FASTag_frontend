import React, { useState } from "react";
import { FiPlus, FiMinus  } from "react-icons/fi"; // npm install lucide-react

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FASTag?",
      answer:
        "FASTag is a prepaid tag fixed on your vehicle’s windscreen that enables automatic toll payment at toll plazas using RFID technology.",
    },
    {
      question: "How can I recharge my FASTag on Logiclead?",
      answer:
        "You can recharge your FASTag easily by logging into the Logiclead app, selecting your bank, and completing payment via UPI, Net Banking, or Credit/Debit Card.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "All major payment methods are accepted including UPI, Net Banking, Debit Card, Credit Card, and Wallets.",
    },
    {
      question: "Is there any minimum recharge amount?",
      answer:
        "Yes, the minimum recharge amount may vary depending on your issuing bank, usually starting from ₹100.",
    },
    {
      question: "How long does it take for the recharge to reflect?",
      answer:
        "The recharge usually reflects in your FASTag account instantly, but in rare cases, it might take up to 5 minutes.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-10 px-4 mt-10 rounded-xl ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800  mb-8">
        Frequently Asked Questions
      </h2>

      <ul className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg"
          >
            {/* Header Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {index + 1}. {faq.question}
              </h3>
              {openIndex === index ? (
                <FiMinus  className="text-blue-500 transition-transform duration-300 rotate-180" />
              ) : (
                <FiPlus className="text-blue-500 transition-transform duration-300" />
              )}
            </div>

            {/* Animated Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqSection;
