import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from 'entities/User';

import {
    RoutePath,
} from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/home.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import ArticlesPageIcon from 'shared/assets/icons/articles.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(
    [
        getUserAuthData,
    ],
    (userData) => {
        const sidebarItems: SidebarItemType[] = [
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

        ];

        if (userData) {
            sidebarItems.push(
                {
                    path: RoutePath.ARTICLES,
                    Icon: ArticlesPageIcon,
                    text: 'Статьи',
                },

                {
                    path: `${RoutePath.PROFILE}${userData?.id}`,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
            );
        }

        return sidebarItems;
    },
);
