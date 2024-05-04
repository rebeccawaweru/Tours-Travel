// CurrencyContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import client from '../api/client';
const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('KES');
  const [conversionRates, setConversionRates] = useState(null);
  useEffect(()=>{
    client.get('/convert').then((response) => {
        setConversionRates(response.data)
    })
  },[])
  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, conversionRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
