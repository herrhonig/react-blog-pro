import {
    ComponentStory,
    ComponentMeta,
} from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import GetArticleDetailsCommentList from './GetArticleDetailsCommentList';

export default {
    title: 'features/GetArticleDetailsCommentList',
    component: GetArticleDetailsCommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GetArticleDetailsCommentList>;

const Template: ComponentStory<typeof GetArticleDetailsCommentList> = (args) => <GetArticleDetailsCommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    articleId: '1',
};
Primary.decorators = [StoreDecorator({})];
