import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from './helpers';
import { useTheme } from './theme/useTheme';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export const App = () => {
  const { theme, onToggleTheme } = useTheme();
  const bool = true; 

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={onToggleTheme}>TOGGLE THEME</button>

        <Link to={'/'}>ГЛАВНАЯ</Link>
        <Link to={'/about'}>О САЙТЕ</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />}/>
                <Route path={'/'} element={<MainPageAsync />}/>
            </Routes>
        </Suspense>
    </div>
  )
}
