/* Данный файл и есть public api - который регулирует то, что отдавать наружу с нижних уровней */

import { ThemeProvider } from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';
import { Theme } from './lib/theme.schema';

export {
    ThemeProvider,
    useTheme,
    Theme,
};
