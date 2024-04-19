/* eslint-disable i18next/no-literal-string */
import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Country as CountryEnum } from '../../model/types/country';
import cls from './CountrySelect.module.scss';

interface Props {
    className?: string;
    readonly: boolean;
    selectedValue: CountryEnum;
    onChange: (country: CountryEnum) => void;
}

const options = [
    { value: CountryEnum.Russia, content: CountryEnum.Russia },
    { value: CountryEnum.Sweden, content: CountryEnum.Sweden },
    { value: CountryEnum.Thailand, content: CountryEnum.Thailand },
    { value: CountryEnum.Germany, content: CountryEnum.Germany },
    { value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan },
];

export const CountrySelect: React.FC<Partial<Props>> = ({
    className,
    readonly,
    selectedValue,
    onChange,
}) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as CountryEnum);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            readonly={readonly}
            label="Укажите страну"
            selectedValue={selectedValue}
            options={options}
            onChange={onChangeHandler}
        />
    );
};
