import React from "react";
import { useContext } from "react";
import { useState } from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  // const [getUser, setUser] = useState({});

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    return user;
  };

  const setUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <AuthContext.Provider value={{ getUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
