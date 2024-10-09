import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';

import {
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui/Button/Button';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';

import { SidebarItem } from '../SidebarItem';
import cls from './Sidebar.module.scss';

interface Props {
    className?: string;
}

export const Sidebar: React.FC<Props> = memo(({ className }) => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <menu
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
                {itemsList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    shortName={collapsed}
                />
            </div>
        </menu>
    );
});
