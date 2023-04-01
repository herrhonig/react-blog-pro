import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/themeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language == 'ru' ? 'en' : 'ru');
  }

  return (
    <>
      <button onClick={toggle}>{t('Перевод')}</button>
      <div>{t('Тестовый пример')}</div>
    </>
  )
}

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="">
            <Navbar />
            <Component />
            <div className="content-page">
                <Sidebar /> 
                <AppRouter /> 
            </div>
        </Suspense>
    </div>
  )
}
