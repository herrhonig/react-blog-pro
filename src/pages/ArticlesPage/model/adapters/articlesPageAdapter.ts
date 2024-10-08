import { createEntityAdapter } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export const articlesPageAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});
