import React from 'react';
import cls from './ThemeSwitcher.module.scss';

import { useTheme, Theme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';


interface Props {
    className?: string;
}

export const ThemeSwitcher: React.FC<Props> = ({ className }) => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={onToggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
