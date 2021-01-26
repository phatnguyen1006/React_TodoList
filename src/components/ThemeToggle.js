import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

const ThemeToggle = () => {
 
    // Catch Context Data
    const { toggleTheme } = useContext(ThemeContext)
    
    return (
        <div className="toggle-btn" onClick={toggleTheme}>
            <button>FieldTheme</button>
        </div>
    );
}

export default ThemeToggle;