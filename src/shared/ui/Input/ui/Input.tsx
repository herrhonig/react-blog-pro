import React, {
    InputHTMLAttributes, memo, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface Props extends HTMLInputProps {
    className?: string;
    value?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: Props) => {
    const {
        type = 'text',
        value,
        className,
        placeholder,
        autofocus = false,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);
    const [isFocused, setFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

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
        <div className={classNames(cls.InputWrapper, {}, [className])}>
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
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
