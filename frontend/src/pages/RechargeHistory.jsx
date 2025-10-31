


import { FaHistory } from "react-icons/fa";
import { useRecharge } from "../context/RechargeContext";

const RechargeHistory = () => {
  const { rechargeHistory } = useRecharge();

  return (
    <div className="mt-6 w-full px-2 sm:px-4">
      <div className="shadow-lg rounded-2xl p-4 bg-white">
        <div className="flex items-center gap-2 mb-4 mt-2">
          <FaHistory className="text-xl text-blue-600" />
          <h3 className="text-xl font-semibold">Recharge History</h3>
        </div>

        {rechargeHistory.length === 0 ? (
          <p className="text-center text-gray-500">No recharge history found.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse border border-gray-200 text-sm sm:text-base mt-2">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Sr.No</th>
                  <th className="p-2 border">Bank</th>
                  <th className="p-2 border">Customer</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Discount</th>
                  <th className="p-2 border">Vehicle</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {rechargeHistory.map((r, i) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="p-2 border text-center">{i + 1}</td>
                    <td className="p-2 border">{r.bank}</td>
                    <td className="p-2 border">{r.customer}</td>
                    <td className="p-2 border">₹{r.amount}</td>
                    <td className="p-2 border text-green-600">{r.discount}</td>
                    <td className="p-2 border">{r.vehicle}</td>
                    <td className="p-2 border">{r.date}</td>
                    <td className="p-2 border text-blue-600 font-medium">
                      {r.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RechargeHistory;
