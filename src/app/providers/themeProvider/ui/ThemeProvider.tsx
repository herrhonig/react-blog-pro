import React from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeType,
} from 'app/providers/themeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || 'light';

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeType>(defaultTheme);

  /* Создаем defaultParams чтобы компонента
    не перерисовывалась каждый раз
    из-за новой ссылки на объект
    с параметрами theme/setTheme
  */
  const defaultParams = React.useMemo(() => ({
      theme: theme,
      setTheme: setTheme,
  }), [theme]);

  return (
      <ThemeContext.Provider value={defaultParams}>
          {children}
      </ThemeContext.Provider>
  )
}
