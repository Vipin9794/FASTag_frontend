

import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { useWallet } from "../context/WalletContext";

const WalletHistory = () => {
  const { walletHistory } = useWallet();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredHistory = walletHistory.filter((item) => {
    const itemDate = new Date(item.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    if (from && to) return itemDate >= from && itemDate <= to;
    if (from) return itemDate >= from;
    if (to) return itemDate <= to;
    return true;
  });

  return (
    <div className="mt-6 w-full px-4">
      <div className="shadow-lg rounded-lg p-4 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <FaHistory className="text-xl text-blue-700" />
          <h3 className="text-xl font-semibold text-gray-800">
            Wallet History
          </h3>
        </div>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">From Date:</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">To Date:</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">#</th>
                <th className="p-3 border text-left">Service</th>
                <th className="p-3 border text-left">Transaction Id</th>
                <th className="p-3 border text-left">Amount</th>
                <th className="p-3 border text-left">Created At</th>
                <th className="p-3 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border">FASTag Recharge</td>
                    <td className="p-3 border">
                      {item.mode}-{1000 + i}
                    </td>
                    <td className="p-3 border">₹{item.amount}</td>
                    <td className="p-3 border">{item.date}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        item.status === "Success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium italic bg-gray-50"
                  >
                    No record found for the selected range.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
