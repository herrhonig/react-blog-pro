import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';

import {
    CommentListLoader,
    getArticleDetailsCommentsSelector,
    fetchCommentsByArticleId,
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from 'features/LoadCommentList';

import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface Props {
    className?: string;
}

// Note: uncomment when DynamicModuleLoader is needed;
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('article-details');

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailsCommentsSelector.selectAll);

    const isCommentsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const commentsError = useSelector(getArticleDetailsCommentsError);

    const { id: articleId } = useParams<{id: string}>();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    if (!articleId) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails articleId={articleId} />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    text={t('Комментарии')}
                />
                <CommentListLoader
                    comments={comments}
                    isLoading={isCommentsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
