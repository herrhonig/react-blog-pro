import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import ListIcon from 'shared/assets/icons/view-list.svg';
import SquareIcon from 'shared/assets/icons/view-square.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSwitcher.module.scss';

type Props = {
  className?: string;
  view: ArticleView;
  onChangeView: (view: ArticleView) => void;
};

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: SquareIcon,
    },
];

export const ArticleViewSwitcher = memo(
    ({ className, view, onChangeView }: Props) => {
        const onClick = (newView: ArticleView) => () => onChangeView?.(newView);

        return (
            <div className={classNames(cls.root, {}, [className])}>
                {viewTypes.map(({ icon, view: viewType }) => (
                    <Button
                        key={viewType}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType)}
                    >
                        <Icon
                            SvgComponent={icon}
                            className={classNames(cls.icon, {
                                [cls.selected]: view === viewType,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);
