import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    NOT_FOUND: 'not_found',
} as const;

export const RoutePath: Record<keyof typeof AppRoutes, string> = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE: '/profile',
    NOT_FOUND: '*',
};

export const routeConfig: Record<keyof typeof AppRoutes, AppRouteProps> = {
    MAIN: {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    ABOUT: {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    PROFILE: {
        path: RoutePath.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
