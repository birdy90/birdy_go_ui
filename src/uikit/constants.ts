import {clsx} from "clsx";

export const focusOutlineClasses: string = clsx(
    'focus:outline-none focus-visible:outline-2',
    'dark:focus-visible:outline-gray-500',
    'focus-visible:outline-gray-700/25 focus-visible:outline-offset-2'
);

export const inputCommonClasses = (errored?: boolean, large?: boolean) => {
    return clsx(
        'bg-white dark:bg-gray-800',
        'border border-border dark:border-border-dark',
        'px-2 py-0.5 rounded h-8 flex leading-none',
        large && 'h-10',
        errored && 'border-danger-500',
        focusOutlineClasses,
    )
};