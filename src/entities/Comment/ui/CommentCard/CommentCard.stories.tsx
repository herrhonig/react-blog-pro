import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isLoading: false,
    comment: {
        id: '2',
        body: 'Новый комментарий для Storybook',
        user: {
            id: '1',
            username: 'logell',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30XlwtlWYBNQXV20Wm5bN4ovrJCV1sf4rRS-TiXDdfzbFBSjlkvsfNYuVsPFVr-ttVgU&usqp=CAU',
        },
    },
};
Primary.decorators = [StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
    comment: undefined,
};
