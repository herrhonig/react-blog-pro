import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from 'entities/Comment';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface Props {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard: React.FC<Props> = memo(({ className, comment, isLoading }) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    width="100%"
                    height={50}
                />
            </div>

        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.PROFILE}/${comment?.user?.id}`}
                className={cls.header}
            >
                {comment?.user?.avatar
                && (
                    <Avatar
                        size={30}
                        src={comment?.user?.avatar}
                    />
                )}
                <Text
                    className={cls.username}
                    title={comment?.user?.username}
                />
            </AppLink>

            <Text
                className={cls.text}
                text={comment?.body}
            />
        </div>
    );
});
