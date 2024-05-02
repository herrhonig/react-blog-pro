import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface Props {
    className?: string;
    comments?: Comment[];
    isLoading: boolean;
}

export const CommentList: React.FC<Props> = memo(({
    className,
    comments,
    isLoading,
}) => {
    const { t } = useTranslation('comment');

    if (!comments?.length) {
        return (
            <Text text={t('Комментарии отсутствуют')} />
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.map((comment) => (
                <CommentCard
                    className={cls.comment}
                    key={comment?.id}
                    comment={comment}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
});
