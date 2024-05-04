// CurrencyContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import client from '../api/client';
const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('KES')
  const [selectLang, setSelectedLang] = useState('en')
  const [flag, setFlag] = useState("https://res.cloudinary.com/dkjb6ziqg/image/upload/united-states-removebg-preview_mbwjxr.png")
  const [conversionRates, setConversionRates] = useState(null);
  useEffect(()=>{
    client.get('/convert').then((response) => {
        setConversionRates(response.data)
    })
  },[])
  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency, selectLang, setSelectedLang, flag, setFlag, conversionRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
