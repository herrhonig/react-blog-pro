import React, { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextSize } from 'shared/ui/Text/Text';

import { ArticleDetails } from 'entities/Article';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

import { GetArticleDetailsCommentList } from 'features/GetArticleDetailsCommentList';
import { AddCommentForm } from 'features/AddCommentForm';

import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
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

    const { id: articleId } = useParams<{id: string}>();

    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

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
                <ArticleDetails
                    articleId={articleId}
                />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    text={t('Комментарии')}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <GetArticleDetailsCommentList
                    articleId={articleId}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
