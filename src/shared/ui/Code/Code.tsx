import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Code: React.FC<Props> = memo(({
    className,
    children,
}) => {
    const { t } = useTranslation();
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
            >
                {t('Копировать')}
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
});
