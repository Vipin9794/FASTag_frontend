



import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useUser } from "./UserContext";

const RechargeContext = createContext();

export const useRecharge = () => useContext(RechargeContext);

export const RechargeProvider = ({ children }) => {
  const { user, updateUser } = useUser();
  const [rechargeHistory, setRechargeHistory] = useState([]);

  useEffect(() => {
    if (user?.rechargeHistory) {
      setRechargeHistory(user.rechargeHistory);
    }
  }, [user]);

  const addRecharge = (newRecharge) => {
    if (!user?.name) {
      toast.warning(" Please update your profile before recharge!");
      return;
    }

    const finalRecharge = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      bank: newRecharge.bank,
      customer: user.name,
      amount: newRecharge.amount,
      discount: newRecharge.discount || "0%",
      vehicle: newRecharge.vehicle || "N/A",
      status: "Success",
    };

    const updatedHistory = [finalRecharge, ...(user.rechargeHistory || [])];

    // Save in localStorage (user profile)
    updateUser({
      rechargeHistory: updatedHistory,
      lastBank: newRecharge.bank,
      lastAmount: newRecharge.amount,
    });

    setRechargeHistory(updatedHistory);
    toast.success(" Recharge added to history!");
  };

  return (
    <RechargeContext.Provider value={{ rechargeHistory, addRecharge }}>
      {children}
    </RechargeContext.Provider>
  );
};
