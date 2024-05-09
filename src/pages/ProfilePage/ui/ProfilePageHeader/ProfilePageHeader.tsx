import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

import cls from './ProfilePageHeader.module.scss';

interface Props {
    className?: string;
}

export const ProfilePageHeader: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const authData = useSelector(getUserAuthData);

    const profileData = useSelector(getProfileData);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const canEdit = authData?.id === profileData?.id;

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.buttonsWrapper}>
                    {
                        readonly
                            ? (
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <>
                                    <Button
                                        className={cls.editBtn}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Отменить')}
                                    </Button>
                                    <Button
                                        className={cls.saveBtn}
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                </>
                            )
                    }
                </div>

            )}
        </div>
    );
};
