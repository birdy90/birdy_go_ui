import {clsx} from "clsx";

export const focusOutlineClasses: string = 'focus:outline-none focus-visible:outline-2 focus-visible:outline-gray-700/25 focus-visible:outline-offset-2';

export const inputCommonClasses = (errored?: boolean) => {
    return clsx(
        'px-3 py-2 border border-border rounded h-10 flex leading-none',
        errored && 'border-danger-500',
    )
};