export const throttle = (fn: (...a: unknown[]) => unknown | (() => unknown), delay: number) => {
    let prev = 0;

    return (...args: unknown[]) => {
        const now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return fn(...args);
        }
    };
};
