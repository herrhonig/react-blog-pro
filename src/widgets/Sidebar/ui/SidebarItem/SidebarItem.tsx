import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from 'widgets/Sidebar/model/items';

import cls from './SidebarItem.module.scss';

interface Props {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<Props> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
        >
            {/* @ts-ignore */}
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
