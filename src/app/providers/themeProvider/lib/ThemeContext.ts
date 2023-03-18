import { createContext } from "react";

export type ThemeType = 'light' | 'dark';

export interface ThemeContextParams {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextParams>({}); /* Создаем контекст для темы, чтобы можно было его использовать в разных местах приложения */

export const LOCAL_STORAGE_THEME_KEY = 'theme'; /* Создаем ключ темы для LS, чтобы когда юзер вернулся в приложение - тема сохранилась! */
