/* eslint-disable i18next/no-literal-string */
import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface Props {
    className?: string;
    readonly?: boolean;
    label?: string;
    options?: SelectOption[];
    selectedValue?: string;
    onChange?: (value?: string) => void;
}

export const Select: React.FC<Props> = memo(({
    className,
    label = '',
    readonly = true,
    options = [],
    selectedValue,
    onChange,
}) => {
    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.select}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange callback is possibly undef
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label} >`}
                </span>
            )}
            <select
                className={cls.select}
                disabled={readonly}
                value={selectedValue}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
