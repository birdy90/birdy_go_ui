import {clsx} from "clsx";

export const focusOutlineClasses: string = 'focus:outline-none focus-visible:outline-2 focus-visible:outline-gray-700/25 focus-visible:outline-offset-2';

export const inputCommonClasses = (errored?: boolean, large?: boolean) => {
    return clsx(
        'px-2 py-0.5 border border-border rounded h-8 flex leading-none',
        large && 'h-10',
        errored && 'border-danger-500',
    )
};