import React from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from 'app/providers/themeProvider/lib/ThemeContext';
import { Theme } from '../lib/theme.schema';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;

}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

    /* Создаем defaultParamsMemo чтобы компонента
    не перерисовывалась каждый раз
    из-за новой ссылки на объект
    с параметрами theme/setTheme
  */
    const defaultParams = React.useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultParams}>
            {children}
        </ThemeContext.Provider>
    );
};
