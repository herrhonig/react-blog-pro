import React, {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import { useInifiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: React.FC<Props> = memo(
    ({ className, children, onScrollEnd = () => {} }) => {
        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
        const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

        useInifiniteScroll({
            callback: onScrollEnd,
            triggerRef,
            wrapperRef,
        });

        return (
            <section
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className])}
            >
                {children}
                <div ref={triggerRef} />
            </section>
        );
    },
);
