/* eslint-disable react/function-component-definition */
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
