import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';

import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface Props {
    className?: string;
    textCode: string;
}

export const Code: React.FC<Props> = memo(({
    className,
    textCode,
}) => {
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(textCode);
    }, [textCode]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />

            </Button>
            <code>
                {textCode}
            </code>
        </pre>
    );
});
