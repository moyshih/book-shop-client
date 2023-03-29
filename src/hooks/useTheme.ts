import { useContext } from "react";
import { ThemeContext } from "../context/ThemeModeProvider";

function useTheme() {
    return useContext(ThemeContext);
}

export default useTheme;