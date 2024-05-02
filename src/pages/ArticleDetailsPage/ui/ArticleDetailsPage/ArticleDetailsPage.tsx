import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface Props {
    className?: string;
}

const ArticleDetailsPage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('article-details');

    const { id: articleId } = useParams<{id: string}>();

    if (!articleId) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails articleId={articleId} />
            <Text
                className={cls.commentTitle}
                size={TextSize.L}
                text={t('Комментарии')}
            />
            <CommentList
                comments={[]}
                isLoading={false}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
