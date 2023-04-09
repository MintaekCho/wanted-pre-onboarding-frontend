import React, { createContext } from "react";

export const TokenContext = createContext();

export default function TokenVaildContext({ children }) {
  const token = localStorage.getItem("token");

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}
