import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface Props {
    className?: string;
}

export const PageError: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    const onReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={onReloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
