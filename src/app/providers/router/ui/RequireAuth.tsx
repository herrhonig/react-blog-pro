import React from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

import { Navigate, Route, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface Props {
    children: JSX.Element;
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.MAIN} state={{ from: location }} replace />;
    }

    return (
        children
    );
};
