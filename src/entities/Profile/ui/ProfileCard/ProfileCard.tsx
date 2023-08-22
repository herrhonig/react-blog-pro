import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';

import cls from './ProfileCard.module.scss';

interface Props {
    className?: string;
}

export const ProfileCard: React.FC<Props> = memo(({ className }) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
