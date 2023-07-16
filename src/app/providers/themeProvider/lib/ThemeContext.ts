import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextParams {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextParams>({}); /* Создаем контекст для темы, чтобы можно было его использовать в разных местах приложения */

export const LOCAL_STORAGE_THEME_KEY = 'theme'; /* Создаем ключ темы для LS, чтобы когда юзер вернулся в приложение - тема сохранилась! */
