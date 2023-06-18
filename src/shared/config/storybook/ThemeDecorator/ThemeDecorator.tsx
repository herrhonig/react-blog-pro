/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

import { Theme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
