import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import GetArticleDetailsCommentList from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: GetArticleDetailsCommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GetArticleDetailsCommentList>;

const Template: ComponentStory<typeof GetArticleDetailsCommentList> = (args) => <GetArticleDetailsCommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {

            id: '2',
            body: 'Новый комментарий для Storybook',
            user: {
                id: '1',
                username: 'logell',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30XlwtlWYBNQXV20Wm5bN4ovrJCV1sf4rRS-TiXDdfzbFBSjlkvsfNYuVsPFVr-ttVgU&usqp=CAU',
            },

        },
        {

            id: '2',
            body: 'Новый комментарий для Storybook',
            user: {
                id: '1',
                username: 'logell',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30XlwtlWYBNQXV20Wm5bN4ovrJCV1sf4rRS-TiXDdfzbFBSjlkvsfNYuVsPFVr-ttVgU&usqp=CAU',
            },

        },
    ],
};
Primary.decorators = [StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
