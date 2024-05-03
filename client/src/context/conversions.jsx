import { createContext, useState } from "react"
export const ConvertContext = createContext(null)

const Conversions = ({children}) => {
    const [language, setlanguage] = useState()
    const [currency, setCurrency] = useState('KES')
    return <ConvertContext.Provider value={{language, currency}}>
        {children}
    </ConvertContext.Provider>
}

export default Conversions