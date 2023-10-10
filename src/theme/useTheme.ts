import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";

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
