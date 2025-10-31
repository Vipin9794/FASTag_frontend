


import { createContext, useState, useContext, useEffect } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletHistory, setWalletHistory] = useState([]);

  const getCurrentEmail = () => localStorage.getItem("currentUserEmail");
  const getWalletKey = (email) => `wallet_${email}`;

  const loadWallet = () => {
    const email = getCurrentEmail();
    if (!email) return;
    const key = getWalletKey(email);
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      setWalletBalance(parsed.balance || 0);
      setWalletHistory(parsed.history || []);
    } else {
      setWalletBalance(0);
      setWalletHistory([]);
    }
  };

  useEffect(() => {
    loadWallet();
  }, []);

  const refreshWallet = () => loadWallet();

  const persistWallet = (email, balance, history) => {
    const key = getWalletKey(email);
    localStorage.setItem(key, JSON.stringify({ balance, history }));
  };

  const addTransaction = (amount, mode) => {
    const email = getCurrentEmail();
    if (!email) return;

    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      mode,
      status: "Success",
    };

    const newHistory = [newTx, ...walletHistory];
    const newBalance = Number(walletBalance) + Number(amount);

    setWalletHistory(newHistory);
    setWalletBalance(newBalance);

    persistWallet(email, newBalance, newHistory);
  };

  return (
    <WalletContext.Provider
      value={{ walletBalance, walletHistory, addTransaction, refreshWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
