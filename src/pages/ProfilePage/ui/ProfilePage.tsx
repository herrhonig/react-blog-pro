import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { profileReducer } from 'entities/Profile';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface Props {
    className?: string;
}

const ProfilePage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
