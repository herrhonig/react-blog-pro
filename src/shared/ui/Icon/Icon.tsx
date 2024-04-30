import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Icon.module.scss';

interface Props {
    className?: string;
    SvgComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: React.FC<Props> = memo(({ className, SvgComponent }) => (
    <SvgComponent className={classNames(cls.Icon, {}, [className])} />
));
