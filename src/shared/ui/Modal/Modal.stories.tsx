import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem. 100',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eaque eum atque consectetur veritatis voluptate ut obcaecati facilis autem officiis, dolore facere tempore cumque quas, officia mollitia numquam voluptatem. 100',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
