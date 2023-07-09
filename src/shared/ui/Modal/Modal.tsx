import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Modal.module.scss';

interface Props {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

type Mods = Record<string, boolean>;

const ANIMATION_DELAY: number = 300;

export const Modal: React.FC<Props> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    const [isClosing, setIsClosing] = React.useState<boolean>(false);
    const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

    const onClickContent = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current); // Unmount timer.
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div
                className={cls.overlay}
                onClick={onCloseHandler}
            >
                <div
                    className={cls.content}
                    onClick={onClickContent}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
