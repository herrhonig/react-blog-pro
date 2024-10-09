import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Page } from 'shared/ui/Page';

import cls from './NotFoundPage.module.scss';

interface Props {
    className?: string;
}

export const NotFoundPage: React.FC<Props> = memo(({
    className,
}) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
