import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface Props {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<Props> = memo(({ className, articleId }) => {
    const { t } = useTranslation('article-detials');

    const dispatch = useAppDispatch();

    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                // title={t('Произошла ошибка при загрузке статьи')}
                title="Произошла ошибка при загрузке статьи"
            />
        );
    } else {
        content = (
            <div>ArticleDetails:</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {/* <div className={classNames(cls.ArticleDetails, {}, [className])}> */}
            {/* {t('О статье')} */}
            {/* </div> */}
            {content}
        </DynamicModuleLoader>
    );
});
