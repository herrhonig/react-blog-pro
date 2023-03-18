/* Данный файл и есть public api - который регулирует то, что отдавать наружу с нижних уровней */

import { ThemeProvider } from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';

export { ThemeProvider, useTheme };
