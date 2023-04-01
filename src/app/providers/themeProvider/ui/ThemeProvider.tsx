import React from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
} from 'app/providers/themeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    /* Создаем defaultParams чтобы компонента
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
