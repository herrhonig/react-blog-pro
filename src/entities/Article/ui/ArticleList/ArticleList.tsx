import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';

import { v4 } from 'uuid';
import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Skeleton } from '../ArticleListItem/Skeleton/Skeleton';

interface Props {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => [...new Array(view === ArticleView.SMALL ? 12 : 6)]
    .fill(0)
    .map(() => (
        <Skeleton
            key={v4()}
            view={view}
        />
    ));

export const ArticleList: React.FC<Props> = ({
    className,
    articles,
    isLoading = false,
    view = ArticleView.SMALL,
}) => {
    const { t } = useTranslation('');

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>

        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {!!articles.length
            && (
                articles.map(renderArticle)
            )}
        </div>
    );
};
