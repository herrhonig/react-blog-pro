import { createContext } from 'react';
import { Theme } from './theme.schema';

export interface ThemeContextParams {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextParams>({}); /* Создаем контекст для темы, чтобы можно было его использовать в разных местах приложения */

export const LOCAL_STORAGE_THEME_KEY = 'theme'; /* Создаем ключ темы для LS, чтобы когда юзер вернулся в приложение - тема сохранилась! */
