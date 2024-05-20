import { useCallback, useMemo, useState } from 'react';

interface UseHoverResult {
    isHover: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHover = () => UseHoverResult;

export const useHover: UseHover = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => ({
        isHover,
        onMouseEnter,
        onMouseLeave,
    }), [isHover, onMouseEnter, onMouseLeave]);
};
