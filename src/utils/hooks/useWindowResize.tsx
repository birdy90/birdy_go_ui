import {useCallback, useEffect, useState} from "react";
import {getScreenSize, screenSize} from "../screenSize";
import {throttle} from "../throttle";

export const useWindowResize = () => {
    const [localScreenSiz1e, setLocalScreenSize] = useState(screenSize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttledCalculation = useCallback(
        throttle(() => {
            const calculatedSize = getScreenSize();
            setLocalScreenSize(calculatedSize);
        }, 300),
        [],
    );

    useEffect(() => {
        window.addEventListener("resize", throttledCalculation);

        return () => {
            window.removeEventListener("resize", throttledCalculation);
        };
    }, [throttledCalculation]);

    return {
        screenSize: localScreenSiz1e,
    };
};
