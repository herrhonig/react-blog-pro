import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainPageIcon from 'shared/assets/icons/home.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesPageIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean;
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
        path: RoutePath.ARTICLES,
        Icon: ArticlesPageIcon,
        text: 'Статьи',
    },

    {
        path: RoutePath.PROFILE,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
];
