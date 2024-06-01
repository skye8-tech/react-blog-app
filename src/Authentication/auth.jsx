import React from "react";
import { useContext } from "react";
import { useState } from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
