import { useEffect } from 'react';

export interface UseInfiniteScrollProps {
  callback: () => void;
  triggerRef: React.MutableRefObject<HTMLElement>; // Trigger element to start intersetion logic
  wrapperRef: React.MutableRefObject<HTMLElement>; // Element with scroll area;
}

export function useInifiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollProps) {
    useEffect(() => {
        // let observer: IntersectionObserver | null = null;
        if (!callback) return undefined;
        // if (callback) {
        const options = {
            root: wrapperRef.current, // root element with scroll area
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry], _) => {
            // Call once:
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        observer.observe(triggerRef.current);

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
            // };
        };
    }, [triggerRef, wrapperRef, callback]);
}
