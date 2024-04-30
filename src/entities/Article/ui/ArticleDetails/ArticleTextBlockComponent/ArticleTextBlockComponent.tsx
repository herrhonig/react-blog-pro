import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../../model/types/article';

interface Props {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<Props> = memo(({ className, block }) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (
            <Text title={block.title} className={cls.title} />
        )}
        {
            !!block.paragraphs.length
            && block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph} text={paragraph} />
            ))
        }
    </div>
));
