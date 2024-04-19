import React, {
    InputHTMLAttributes, memo, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface Props extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: Props) => {
    const {
        type = 'text',
        value,
        className,
        placeholder,
        autofocus = false,
        readonly = false,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);
    const [isFocused, setFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const isCaretVisible = isFocused && !readonly;

    const onChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }, [onChange]);

    const onFocus = () => {
        setFocused(true);
    };

    const onBlur = () => {
        setFocused(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    React.useEffect(() => {
        if (autofocus) {
            onFocus();
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>

            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cls.input}
                    readOnly={readonly}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
