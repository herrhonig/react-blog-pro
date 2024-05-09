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
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentListReducer } from '../../model/slices/getArticleDetailsCommentListSlice';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsSelector,
} from '../../model/selectors/articleComments';

import cls from './GetArticleDetailsCommentList.module.scss';

interface Props {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetailsComments: getArticleDetailsCommentListReducer,
};

const GetArticleDetailsCommentList: React.FC<Props> = memo(({
    className,
    articleId,
}) => {
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailsCommentsSelector.selectAll);

    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const error = useSelector(getArticleDetailsCommentsError);

    const { t } = useTranslation('comment');

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.Root, {}, [className])}>
                {comments?.length
                    ? comments?.map((comment) => (
                        <CommentCard
                            className={cls.comment}
                            key={comment?.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                    : (
                        <Text text={t('Комментарии отсутствуют')} />

                    )}
            </div>
        </DynamicModuleLoader>
    ); 
});

export default GetArticleDetailsCommentList;
