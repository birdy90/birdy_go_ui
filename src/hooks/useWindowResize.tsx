import {useCallback, useEffect, useState} from "react";
import {getScreenSize, screenSize} from "../utils";
import throttle from "lodash/throttle";

export const useWindowResize = () => {
    const [localScreenSize, setLocalScreenSize] = useState(screenSize);

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
        screenSize: localScreenSize,
    };
};
