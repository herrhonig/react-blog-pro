import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';

import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

export interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList: React.FC<CommentListProps> = memo(({
    className,
    comments,
    isLoading,
}) => {
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (

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

    );
});

export default CommentList;
