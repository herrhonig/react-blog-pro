import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface Props {
    className?: string;
    shortName?: boolean;
}

/* Данный компонент инапсулирует логику переключения языка */

export const LangSwitcher: React.FC<Props> = memo(({
    className,
    shortName,
}) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(shortName ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
