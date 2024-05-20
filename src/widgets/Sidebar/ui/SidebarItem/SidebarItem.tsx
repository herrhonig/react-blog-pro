import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { getUserAuthData } from 'entities/User';

import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface Props {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<Props> = memo(({
    item,
    collapsed,
}) => {
    const { t } = useTranslation();
    const auth = useSelector(getUserAuthData);

    if (item.authOnly && !auth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.PRIMARY}
        >
            {/* @ts-ignore */}
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
