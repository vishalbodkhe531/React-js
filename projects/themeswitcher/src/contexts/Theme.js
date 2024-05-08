import { createContext, useContext } from "react";

export const ThemeConstext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeConstext.Provider;

export default function useTheme() {
  return useContext(ThemeConstext);
}
