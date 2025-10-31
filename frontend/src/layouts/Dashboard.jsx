import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroDash from "./HeroDash";
import Banner from "../assets/Banner.png";
import FaqSection from "./FaqSection"
import BankCard from "../components/BankCard";

// Import all bank logos (example paths — update according to your project)
import fastagcard from "../assets/fastagcard.jpg"
import bbpsLogo from "../assets/bbps.png";
import hdfcLogo from "../assets/hdfc.jpg"; // make sure file name is exact
import iciciLogo from "../assets/icici.jpg";
import sbiLogo from "../assets/sbi.jpg";
import axisLogo from "../assets/Axis.jpg";
import paytmLogo from "../assets/Paytem.jpg";
import kotakLogo from "../assets/Kotak.jpg";
import indianBank from "../assets/INDIAN.jpg";
import jioPayment from "../assets/jioPayment.jpg";
import bobLogo from "../assets/Bob.jpg";
import union from "../assets/unionBank.jpg";
import IDFC from "../assets/Idfc.jpg";
import Airtel from "../assets/airtel.webp";

export default function MainDashboard() {
  const [showLogin, setShowLogin] = useState(false);

  const bankList = [
    { name: "HDFC Bank", img: hdfcLogo },
    { name: "ICICI Bank", img: iciciLogo },
    { name: "State Bank of India", img: sbiLogo },
    { name: "Axis Bank", img: axisLogo },
    { name: "Paytm Payments Bank", img: paytmLogo },
    { name: "Kotak Mahindra Bank", img: kotakLogo },
    { name: "Indian Bank", img: indianBank },
    { name: "Bank of Baroda", img: bobLogo },
    { name: "Jio Payments Bank", img: jioPayment },
    { name: "IDFC Bank", img: IDFC },
    { name: "Union Bank", img: union },
    { name: "Airtel Bank", img: Airtel },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/*  Navbar */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/*  Hero Section */}
      <HeroDash />

      {/*  Banner Image */}
      <img
        src={Banner}
        alt="BBPS"
        className="mx-auto w-full max-h-[400px] object-cover mb-8"
      />
      {/*  Bank List Section */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-9 text-center">
          FASTag Provider
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center mt-5">
          {bankList.map((bank) => (
            <div
              key={bank.name}
              className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg rounded-xl p-4 w-36 sm:w-40 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {/* Logo */}
              <img
                src={bank.img}
                alt={bank.name}
                className="h-14 sm:h-16 object-contain mb-3"
              />

              {/* Bank Name */}
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                {bank.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/*  BuildEase Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 ">
  {/* Left Content */}
  <div className="flex-1 space-y-5">
    <h2 className="text-4xl md:text-5xl font-bold mb-5">About Us</h2>
    <p className="max-w-2xl text-lg leading-relaxed mr-3">
      Welcome to <span className="font-semibold">Logiclead</span>, your trusted
      platform for FASTag recharge. We make it easy for vehicle owners to
      recharge their FASTag quickly and securely from anywhere. <p>Our goal is to
      save your time at toll plazas by providing a smooth recharge experience
      with multiple payment options. With reliable service, exciting offers, and
      dedicated support, we are here to make your travel easier and more
      convenient.  </p>
    </p>
  </div>

  {/* Right Image Card */}
  <div className="flex-1 flex justify-center ml-5 mt-10 md:mt-0">
    <div className=" rounded-2xl shadow-2xl   md:w-[380px] sm:w-[480px] md:w-[530px]">
      <img
        src={fastagcard}
        alt="FASTag Card"
        className="w-full h-full "
      />
    </div>
  </div>
</section>


      {/*  ask question */}
      <section className="text-center p-3  px-8 py-3 ">
       <FaqSection />
      </section>

      {/* ✅ Footer */}
      <Footer />

      
    </div>
  );
}
