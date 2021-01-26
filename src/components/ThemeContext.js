import React, { createContext, useState } from 'react'

// Create Context
export const ThemeContext = createContext()

// Set Context
const ThemeContextProvider = ({ children }) => {
    
    // Set Theme Context
    const [theme, setTheme] = useState(
    {
        isLightMode: true,
        light: {
            background: 'rgb(219, 219, 219)',
            color: 'black'
        },
        dark: {
            background: 'rgb(39, 39, 39)',
            color: 'white'
        }
    })
    
    // Func to setTheme
    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightMode: !theme.isLightMode
        })
    }

    // Context Data
    const ContextData = { theme, toggleTheme }
    
    // return Provider
    return (
        <ThemeContext.Provider value={ ContextData }>
            { children }
        </ThemeContext.Provider>
    )
    

}

export default ThemeContextProvider;