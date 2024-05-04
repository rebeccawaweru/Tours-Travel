import { createContext, useEffect, useState } from "react"
import client from "../api/client";
export const ConvertContext = createContext({
    language: '',
    currency: '',
    rates: []
  });

const Conversions = ({children}) => {
    const [language, setlanguage] = useState()
    const [currency, setCurrency] = useState('KES')
    const [rates, setRates] = useState([])
    useEffect(async()=>{
        const rates = await client.get('/convert')
        const array = Object.entries(rates).map(([currency, rate]) => ({
            currency, rate
        }))
        setRates(array)
    },[currency])
    return <ConvertContext.Provider value={{language, currency, rates}}>
        {children}
    </ConvertContext.Provider>
}

export default Conversions