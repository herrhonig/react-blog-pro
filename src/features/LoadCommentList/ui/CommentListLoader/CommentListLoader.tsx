import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Comment } from 'entities/Comment';
import { getCommentListSliceReducer } from 'features/LoadCommentList/model/slices/getCommentListSlice';

import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentListLoader.module.scss';

interface Props {
    className?: string;
    comments?: Comment[];
    isLoading: boolean;
}

const reducers: ReducersList = {
    articleDetailsComments: getCommentListSliceReducer,
};

const CommentListLoader: React.FC<Props> = memo(({
    className,
    comments,
    isLoading,
}) => {
    const { t } = useTranslation('comment');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.CommentListLoader, {}, [className])}>
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

export default CommentListLoader;
