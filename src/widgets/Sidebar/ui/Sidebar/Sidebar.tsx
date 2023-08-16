import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import {
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui/Button/Button';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemList } from 'widgets/Sidebar/model/items';

import { SidebarItem } from '../SidebarItem';
import cls from './Sidebar.module.scss';

interface Props {
    className?: string;
}

export const Sidebar: React.FC<Props> = memo(({ className }) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                onClick={onToggle}
                data-testid="toggleBtn"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.sidebarLinks}>
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    shortName={collapsed}
                />
            </div>
        </div>
    );
});
