import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    ARTICLES: 'articles',
    ARTICLE_DETAILS: 'article_details',
    PROFILE: 'profile',
    NOT_FOUND: 'not_found',
};

export const RoutePath: Record<keyof typeof AppRoutes, string> = {
    MAIN: '/',
    ABOUT: '/about',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/', // + :id
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
    ARTICLES: {
        path: RoutePath.ARTICLES,
        element: <ArticlesPage />,
        authOnly: true,
    },
    ARTICLE_DETAILS: {
        path: `${RoutePath.ARTICLE_DETAILS}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
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
