




import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getCurrentEmail = () => localStorage.getItem("currentUserEmail");

  const loadUser = () => {
    const email = getCurrentEmail();
    if (!email) return setUser(null);
    const key = `user_${email}`;
    const stored = localStorage.getItem(key);
    setUser(stored ? JSON.parse(stored) : null);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const updateUser = (updatedData) => {
    const email = getCurrentEmail();
    if (!email) return;
    const key = `user_${email}`;
    const prev = JSON.parse(localStorage.getItem(key)) || {};
    const newUser = { ...prev, ...updatedData };
    localStorage.setItem(key, JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
