import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import EyeIcon from 'shared/assets/icons/eye.svg';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article,
    ArticleView,
    ArticleTextBlock,
} from '../../model/types/article';

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface Props {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem: React.FC<Props> = ({
    className,
    article,
    view,
}) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.ARTICLE_DETAILS}1`);
    }, [navigate]);

    const types = (
        <Text
            text={article.type?.join(',')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text text={String(article?.views)} className={cls.viewsCount} />
            <Icon SvgComponent={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const articleTextBlock = article.blocks?.find((block) => block?.type === 'TEXT') as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user?.avatar}
                        />
                        <Text
                            text={article?.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        title={article?.title}
                        className={cls.title}

                    />
                    {types}
                    <img
                        src={article?.img}
                        alt={t('Фото статьи')}
                        className={cls.image}
                    />
                    {articleTextBlock && (
                        <ArticleTextBlockComponent
                            block={articleTextBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {`${t('Читать далее')}...`}
                        </Button>
                        <div className={cls.veiwsWrapper}>
                            {views}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card
                className={cls.card}
                onClick={onOpenArticle}
            >
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        alt={t('Фото статьи')}
                        className={cls.image}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}

                </div>

                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </div>
    );
};
