


import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import BankCard from "../components/BankCard";
import FastagRecharge from "./FastagRecharge"; // 👈 import the new page

// Logos
import bbpsLogo from "../assets/bbps.png";
import hdfcLogo from "../assets/hdfc.jpg";
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

const BankListSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);

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

  const filteredBanks = bankList.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 👇 If a bank is selected, show the recharge page
  if (selectedBank) {
    return (
      <FastagRecharge
        selectedBank={selectedBank}
        onEdit={() => setSelectedBank(null)}
      />
    );
  }

  return (
    <div className="bg-blue-30 py-10 px-4 mt-10 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <img src={bbpsLogo} alt="BBPS" className="mx-auto w-32 mb-4" />
        <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Select your FASTag Provider
        </h3>

        <div className="relative mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search your bank..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-2 border-blue-200 focus:border-blue-500 rounded-full py-2.5 pl-10 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none shadow-sm"
          />
          <GoSearch className="absolute left-3 top-3.5 text-gray-500 text-lg" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank) => (
              <div
                key={bank.name}
                onClick={() => setSelectedBank(bank)}
                className="cursor-pointer"
              >
                <BankCard bank={bank} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No banks found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankListSection;
