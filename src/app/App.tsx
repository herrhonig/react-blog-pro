import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/themeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


export const App = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={onToggleTheme}>TOGGLE THEME</button>
    </div>
  )
}
