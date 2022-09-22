import React, { createContext } from "react";
import { useDarkMode } from "./useDarkMode";

export const DarkModeContext = createContext({ isDark: false, toggleDark: () => {} });

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
	const { isDark, toggleDark } = useDarkMode();
	
	return (
		<DarkModeContext.Provider value={{ isDark, toggleDark }}>
			{children}
		</DarkModeContext.Provider>
	)
}
