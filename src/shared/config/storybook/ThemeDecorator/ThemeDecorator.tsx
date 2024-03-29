/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

import { Theme, ThemeProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
