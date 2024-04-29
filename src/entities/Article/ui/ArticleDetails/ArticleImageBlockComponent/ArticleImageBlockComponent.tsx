import React from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './ArticleImageBlockComponent.module.scss';

interface Props {
    className?: string;
}

export const ArticleImageBlockComponent: React.FC<Props> = ({ className }) => {

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])} >
      
    </div>
  );
};
