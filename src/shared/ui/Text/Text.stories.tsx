import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text title lorem',
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Text title lorem',
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text title lorem',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text title lorem',
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text title lorem',
    underline: true,
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
    underline: true,
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text title lorem',
    text: 'Text text lorem lorem -2 lorem lorem lorem -2',
    size: TextSize.L,
};
