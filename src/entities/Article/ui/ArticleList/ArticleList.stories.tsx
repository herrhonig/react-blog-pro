import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [...new Array(9)]
        .fill(0)
        .map((article, i) => (
            {
                ...article,
                id: String(i),
            }
        )),
    view: ArticleView.SMALL,
    isLoading: true,
};

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    view: ArticleView.BIG,
    isLoading: true,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: [...new Array(8)]
        .fill(0)
        .map((article, i) => (
            {
                ...article,
                id: String(i),
            }
        )),
    view: ArticleView.SMALL,
    isLoading: false,
};

export const ListBig = Template.bind({});

ListBig.args = {
    articles: [...new Array(4)]
        .fill(0)
        .map((article, i) => (
            {
                ...article,
                id: String(i),
            }
        )),
    view: ArticleView.BIG,
    isLoading: false,
};
