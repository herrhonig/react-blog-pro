import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface Props {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<Props> = memo(({ className, block }) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <Code textCode={block.code}>
            {block.code}
        </Code>
    </div>
));
