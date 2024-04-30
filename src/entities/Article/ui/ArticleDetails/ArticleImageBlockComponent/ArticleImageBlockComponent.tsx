import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../../model/types/article';

interface Props {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<Props> = memo(({ className, block }) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        {block.src}
    </div>
));
