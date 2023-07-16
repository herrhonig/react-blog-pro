import { useContext } from 'react';

import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from 'app/providers/themeProvider/lib/ThemeContext';

export interface UseTheme {
    (): UseThemeResult;
}

interface UseThemeResult {
    theme: Theme;
    onToggleTheme: () => void;
}

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext); // Вызов контекста для темы.

    const onToggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);

        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        onToggleTheme,
    };
};
