import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Skeleton as SkeletonUI } from 'shared/ui/Skeleton/Skeleton';

import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../../model/types/article';

import cls from './Skeleton.module.scss';

interface Props {
    className?: string;
    view: ArticleView
}

export const Skeleton: React.FC<Props> = memo(({
    className,
    view,
}) => {
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card
                    className={cls.card}
                    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                    <div className={cls.header}>
                        <SkeletonUI
                            height={30}
                            width={30}
                            border="50%"
                        />
                    </div>
                    <SkeletonUI
                        className={cls.title}
                        width={250}
                        height={16}
                    />
                    <SkeletonUI
                        height={200}
                        className={cls.image}
                    />
                    <div className={cls.footer}>
                        <SkeletonUI
                            height={36}
                            width={200}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.SkeletonList, {}, [className, cls[view]])}
        >
            <Card
                className={cls.card}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
                <div className={cls.imageWrapper}>
                    <SkeletonUI
                        width={200}
                        height={200}
                        className={cls.image}
                        border="50%"
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <SkeletonUI
                        width={130}
                        height={16}
                    />
                </div>
                <SkeletonUI
                    width={150}
                    height={16}
                    className={cls.title}
                />
            </Card>
        </div>
    );
});
