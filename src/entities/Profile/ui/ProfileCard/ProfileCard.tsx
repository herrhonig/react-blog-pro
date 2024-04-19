/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Mods } from 'shared/lib/classNames/classNames';

import { Currency as CurrencyEnum } from 'entities/Currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';

import { Country as CountryEnum, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface Props {
    className: string;
    data: Profile;
    error: string;
    isLoading: boolean;
    readonly: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeAge: (age?: string) => void;
    onChangeCity: (city?: string) => void;
    onChangeUsername: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
    onChangeCurrency: (currency: CurrencyEnum) => void;
    onChangeCountry: (country: CountryEnum) => void;
}

type IProps = Partial<Props>;

export const ProfileCard: React.FC<IProps> = memo(({
    className = '',
    data,
    error = '',
    isLoading = false,
    readonly = false,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    // eslint-disable-next-line i18next/no-literal-string
                    title="Ошибка при загрузке профиля"
                    // eslint-disable-next-line i18next/no-literal-string
                    text="Попробуйте обновить страницу"
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {/*  eslint-disable-next-line i18next/no-literal-string */}
                    {data?.avatar && <Avatar src={data?.avatar} alt="аватар пользователя" size={150} />}
                </div>
                <Input
                    value={data?.first}
                    placeholder={t('Имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                    maxLength={2}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Добавьте ссылку на аватар')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />

                <CurrencySelect
                    className={cls.input}
                    selectedValue={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={cls.input}
                    selectedValue={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
