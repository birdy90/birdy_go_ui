import {clsx} from "clsx";

export const focusOutlineClasses: string = clsx(
    'rounded',
    'focus:outline-none focus-visible:outline-2',
    'dark:focus-visible:outline-gray-500',
    'focus-visible:outline-gray-700/25 focus-visible:outline-offset-2'
);

export const focusBackgroundClasses: string = clsx(
    'rounded',
    'focus-visible:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700',
);

export const inputCommonClasses = (errored?: boolean) => {
    return clsx(
        'bg-white dark:bg-gray-800',
        'border border-border dark:border-border-dark',
        'px-2 py-0.5 rounded h-8 flex',
        errored && 'border-red-500',
        focusOutlineClasses,
    );
};