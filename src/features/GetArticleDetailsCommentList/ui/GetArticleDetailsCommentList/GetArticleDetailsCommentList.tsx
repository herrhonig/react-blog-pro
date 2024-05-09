import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentList } from 'entities/Comment';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentListReducer } from '../../model/slices/getArticleDetailsCommentListSlice';
import {
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsSelector,
} from '../../model/selectors/articleComments';

import cls from './GetArticleDetailsCommentList.module.scss';

export interface GetArticleDetailsCommentListProps {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetailsComments: getArticleDetailsCommentListReducer,
};

const GetArticleDetailsCommentList: React.FC<GetArticleDetailsCommentListProps> = memo(({
    className,
    articleId,
}) => {
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailsCommentsSelector.selectAll);

    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <CommentList
                comments={comments}
                isLoading={isLoading}
            />
        </DynamicModuleLoader>
    );
});

export default GetArticleDetailsCommentList;
