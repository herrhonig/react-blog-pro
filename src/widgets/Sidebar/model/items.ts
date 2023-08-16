import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainPageIcon from 'shared/assets/icons/home.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.MAIN,
        Icon: MainPageIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.ABOUT,
        Icon: AboutPageIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.PROFILE,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
