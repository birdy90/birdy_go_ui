// based on tailwind breakpoints

type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const initialBreakpoints: Record<BreakpointKey, number> = {
    xs: 639,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
};

const prepareQueries = (breakpoints = initialBreakpoints): Record<BreakpointKey, string> => {
    const breakpointsEntries = Object.entries(breakpoints) as [BreakpointKey, number][];

    const queryEntries = breakpointsEntries.map(([key, val], index) => {
        let query: string;
        switch (index) {
            case 0:
                query = `(max-width: ${val}px)`;
                break;
            case breakpointsEntries.length - 1:
                query = `(min-width: ${val}px)`;
                break;
            default:
                query = `(min-width: ${val}px) and (max-width: ${breakpointsEntries[index + 1][1] - 1}px)`;
                break;
        }
        return [key, query];
    });

    return Object.fromEntries(queryEntries);
};

export const getScreenSize = (breakpoints = initialBreakpoints): Record<BreakpointKey, boolean> => {
    if (typeof window === "undefined") {
        const breakpointsEntries = Object.entries(breakpoints);
        const breakpointsMapped = breakpointsEntries.map(([key], index) => {
            return [key, index === breakpointsEntries.length - 1];
        });
        return Object.fromEntries(breakpointsMapped);
    }

    const queryEntries = Object.entries(prepareQueries(breakpoints));
    const entries = queryEntries.map(([key, query]) => [key, window.matchMedia(query).matches]);

    return Object.fromEntries(entries);
};

export const screenSize: Record<BreakpointKey, boolean> = getScreenSize();
