import { createContext, useState } from "react";
import { ThemeMode } from "../common/Enum/ThemeMode";

interface ThemeModeProviderProps {
    children?: JSX.Element
}

export const ThemeContext = createContext({ theme: ThemeMode.dark, setTheme: (theme: ThemeMode) => { } });

export const ThemeModeContextProvider = ({ children }: ThemeModeProviderProps) => {

    const [theme, setTheme] = useState<ThemeMode>(ThemeMode.dark);

    const value = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );

}
