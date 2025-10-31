// import BankCard from "../components/BankCard";
import { FaTag, FaCrown, FaRupeeSign } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import FaqSection from "../layouts/FaqSection"
import BankListSection from "./BankListSection";
// const bankList = [
//   { name: "Axis Bank", logo: "/axis.png" },
//   { name: "HDFC Bank", logo: "/hdfc.png" },
//   { name: "ICICI Bank", logo: "/icici.png" },
//   { name: "Paytm Payments Bank", logo: "/paytm.png" },
// ];
const Benifits = [
  "Saves Time",
  "Smooth Toll Passing",
  "Saves Fuel",
  "Alert on Mobile",
  "Save Money",
  "Easy Online Recharge",
];

const Premium = [
  {
    title: "1. Download App",
    description:
      "Download Logiclead app on your mobile and Select 'Recharge Fastag'.",
    icon: (
      <MdOutlinePhoneAndroid className="text-blue-800 text-4xl mx-auto mb-3 animate-float" />
    ),
  },
  {
    title: "2. Select Bank",
    description:
      "Select the Fastag issuing bank and enter your unique identification number printed on your tag.",
    icon: (
      <BiSolidBank className="text-blue-800 text-4xl mx-auto mb-3 animate-float" />
    ),
  },
  {
    title: "3. Recharge & Go 🚘",
    description:
      "Enter the value and proceed with your desired mode of payment.",
    icon: (
      <FaRupeeSign className="text-blue-800 text-4xl mx-auto mb-3 animate-float" />
    ),
  },
];

const Home = () => {
  return (
    <div className="bg-blue-30">
      <BankListSection/>
      {/* <div className="mt-6 ">
        <div className="mb-6">
          <h3 className="text-center text-bg-neutral-800 font-bold mb-1 ">
            Select your FasTag Providers
          </h3>
          <input
            type="text"
            placeholder="Search your bank..."
            className="border p-2 rounded-md w-full"
            
          />
          <GoSearch/>
        </div>
        <div className="grid md:grid-cols-3 gap-4 ">
          {bankList.map((bank) => (
            <BankCard key={bank.name} bank={bank} />
          ))}
        </div>
      </div> */}
      <div className="mt-6 shadow-lg p-3 rounded-lg p-5    justify-start">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4 mt-2">
            <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center  justify-center">
              <FaTag className=" text-white h-5 w-5 " />
            </div>

            <h3 className=" text-bg-neutral-800 font-bold mb-1 text-xl h-10 mt-1 ">
              NETC FASTag
            </h3>
          </div>

          <p className="ml-3">
            The National Electronic Toll Collection (NETC) system is a
            pay-per-use toll collection application that anyone can use. The
            NETC solution uses FASTags with transponder chips. This technology
            enables toll payment and electronic clearing that have been
            implemented for toll collection systems in the past.
          </p>
        </div>

        <h2 className="text-md font-medium mb-2 ml-3 ">Benefits Of FASTag</h2>

        {/* Card Content */}
        <div className="flex flex-wrap gap-6 justify-center">
          {Benifits.map((fruit, index) => (
            <div className="border rounded-lg flex items-center justify-start gap-4 p-1 w-34 h-15 shadow-md cursor-pointer bg-blue-800 transform transition-transform duration-[1000ms] hover:-translate-y-2">
              <span
                key={index}
                className="text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {fruit}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6  p-6   justify-start">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4 mt-2">
            <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center  justify-center">
              <FaCrown className=" text-white h-5 w-5 " />
            </div>

            <h3 className=" text-bg-neutral-800 font-bold mb-1 text-xl h-10 mt-1 ">
              FASTag Premium
            </h3>
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Premium.map((premium, i) => (
            <div
              key={i}
              className="p-5 bg-white  hover:bg-blue-50 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transform transition-all duration-500 text-center"
            >
              {premium.icon}
              <h3 className="font-semibold text-gray-800 text-lg">
                {premium.title}
              </h3>
              <p className="text-gray-600">{premium.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FaqSection />
    </div>
  );
};

export default Home;
