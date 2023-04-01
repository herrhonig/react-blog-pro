import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about'); // <- Передаем название namespace "about". По дефолту - "translation"

  return (
    <div>
      {t('О сайте')}
    </div>
  )
}
export default AboutPage;
 