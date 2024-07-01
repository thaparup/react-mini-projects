// import { Children, createContext, useContext, useState } from "react";

import { createContext, useContext, useState } from "react"

// type Theme = 'dark' | 'light';

// type ThemeContextStates = {
//   theme: Theme,
//   setTheme: React.Dispatch<React.SetStateAction<Theme>>
// }
// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };


// export const ThemeContext = createContext<ThemeContextStates | null>(null);

// export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {

//   const [theme, setTheme] = useState<Theme>("light")

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useThemeContext() {

//   const context = useContext(ThemeContext)
//   if (context === null) {
//     throw new Error('Outside ')
//   }
//   return context
// }


type Theme = 'light' | 'dark'

type ThemeContext = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeContextProvider({ children }: ThemeContextProviderProps): JSX.Element {

    const [theme, setTheme] = useState<Theme>('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (context === null) {
        throw new Error('Calling context outide the wrapper')
    }
    return context
}