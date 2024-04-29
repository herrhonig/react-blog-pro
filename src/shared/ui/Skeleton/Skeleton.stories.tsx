import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    border: '8px',
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    border: '8px',
    width: '100%',
    height: 200,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalGreen = Template.bind({});
NormalGreen.args = {
    border: '8px',
    width: '100%',
    height: 200,
};
NormalGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
