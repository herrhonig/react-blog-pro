import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../../model/types/article';

interface Props {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<Props> = memo(({ className, block }) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img
            className={cls.img}
            src={block.src}
            alt={block.title}
        />
        {block.title && (
            <Text
                text={block.title}
                align={TextAlign.CENTER}
            />
        )}
    </div>
));
