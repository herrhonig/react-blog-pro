import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';

import { useTheme } from './providers/themeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar /> 
                <AppRouter /> 
            </div>
        </Suspense>
    </div>
  )
}
