import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Селектор',
    options: [
        { content: '123', value: 'Первый пункт' },
        { content: '456', value: 'Второй пункт' },
    ],
};
