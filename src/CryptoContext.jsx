import React, { createContext, useState, useContext, useEffect } from "react";

const Cryptofy = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Cryptofy.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Cryptofy.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Cryptofy);
};
