import { useContext } from 'react';

import { ThemeContext, LOCAL_STORAGE_THEME_KEY } from 'app/providers/themeProvider/lib/ThemeContext';
import { Theme, ThemeMap } from './theme.schema';

export interface UseTheme {
    (): UseThemeResult;
}

interface UseThemeResult {
    theme: Theme;
    onToggleTheme: () => void;
}

// Объект-карта для смены темы
export const themeSwitcherMap: ThemeMap = {
    [Theme.LIGHT]: Theme.GREEN,
    [Theme.GREEN]: Theme.DARK,
    [Theme.DARK]: Theme.LIGHT,
};

function defineTheme(theme: Theme | undefined) {
    let newTheme;

    switch (theme) {
    case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
    case Theme.LIGHT:
        newTheme = Theme.GREEN;
        break;
    case Theme.GREEN:
        newTheme = Theme.DARK;
        break;
    default:
        newTheme = Theme.LIGHT;
    }

    return newTheme;
}

export const useTheme: UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext); // Вызов контекста для темы.

    const onToggleTheme = () => {
        const newTheme = defineTheme(theme);

        setTheme?.(newTheme);

        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        onToggleTheme,
    };
};
