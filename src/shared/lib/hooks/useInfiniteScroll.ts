import { useEffect } from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: React.MutableRefObject<HTMLElement>; // Trigger element to start intersetion logic
  wrapperRef: React.MutableRefObject<HTMLElement>; // Element with scroll area;
}

export function useInifiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollProps) {
    useEffect(() => {
        // refs closure:
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;

        if (!callback) return undefined;

        const options = {
            root: wrapperElement, // root element with scroll area
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry], _) => {
            // Call once:
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        observer.observe(triggerElement);

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
