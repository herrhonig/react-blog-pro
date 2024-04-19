/* eslint-disable i18next/no-literal-string */
import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Currency as CurrencyEnum } from '../../model/types/currency';

interface Props {
    className: string;
    readonly: boolean;
    selectedValue: CurrencyEnum;
    onChange: (currency: CurrencyEnum) => void;
}

const options = [
    { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
    { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
    { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
];

export const CurrencySelect: React.FC<Partial<Props>> = memo(({
    className,
    readonly,
    selectedValue,
    onChange,
}) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as CurrencyEnum);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            readonly={readonly}
            label="Укажите валюту"
            selectedValue={selectedValue}
            options={options}
            onChange={onChangeHandler}
        />
    );
});
