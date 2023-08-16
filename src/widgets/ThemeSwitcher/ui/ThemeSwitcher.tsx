import React, { memo } from 'react';

import { useTheme, Theme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface Props {
    className?: string;
}

export const ThemeSwitcher: React.FC<Props> = memo(({ className }) => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
