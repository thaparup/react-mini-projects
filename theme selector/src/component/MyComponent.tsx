import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const MyComponent = () => {

    const { theme, setTheme } = useThemeContext()


    return (
        <div>
            <h1>Theme selector</h1>
            <h1>{theme}</h1>
            <button type="button" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>Switch</button>
        </div>
    )
}

export default MyComponent