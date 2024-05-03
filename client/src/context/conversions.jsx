import { createContext, useEffect, useState } from "react"
export const ConvertContext = createContext(null)

const Conversions = ({children}) => {
    const [language, setlanguage] = useState()
    const [currency, setCurrency] = useState('KES')
    const [rates, setRates] = useState([])
    useEffect(async()=>{
        const url = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_CONVERSION_KEY}/latest/${currency}`
        const response = await fetch(url).then((response) => response.json())
        const array = Object.entries(response.conversion_rates).map(([currency, rate]) => ({
            currency, rate
        }))
        setRates(array)
    },[currency])
    return <ConvertContext.Provider value={{language, currency, rates}}>
        {children}
    </ConvertContext.Provider>
}

export default Conversions