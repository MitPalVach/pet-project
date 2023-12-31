import { useContext } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

interface IUseThemeResult {
	toggleTheme: () => void;
	theme: ETheme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext( ThemeContext );

  const toggleTheme = () => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme( newTheme );
    localStorage.setItem( LOCAL_STORAGE_THEME_KEY, newTheme );
  }

  return { theme, toggleTheme }
}
