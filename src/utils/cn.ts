import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

export function cn(...props: ClassValue[]) {
    return twMerge(clsx(props));
}