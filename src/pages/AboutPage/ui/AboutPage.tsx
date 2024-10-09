import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about'); // <- Передаем название namespace "about". По дефолту - "translation"

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
});
export default AboutPage;
