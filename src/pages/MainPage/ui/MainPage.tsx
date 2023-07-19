/* eslint-disable i18next/no-literal-string */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string>('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input value={value} onChange={onChange} placeholder="Insert text..." />
        </div>
    );
};
export default MainPage;
