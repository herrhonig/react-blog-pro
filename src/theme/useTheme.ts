import { useContext } from "react";

import { ThemeType, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

export interface UseTheme {
    (): UseThemeResult;
}

interface UseThemeResult {
    theme: ThemeType;
    onToggleTheme: () => void;
}

export const useTheme: UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Вызов контекста для темы.

  const onToggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
      theme,
      onToggleTheme,
  }
}
