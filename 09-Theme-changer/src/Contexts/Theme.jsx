
import { createContext,useContext } from "react";



// this is also a syntax but diffreent
export const ThemeContext = createContext({
    // you can also give variable and methods
        // default theme
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}




























































































