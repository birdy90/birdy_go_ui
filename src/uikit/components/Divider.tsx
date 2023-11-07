import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

interface DividerProps {
    className?: string;
    orientation?: 'vertical' | 'horizontal';
}

export const Divider = ({ orientation = 'horizontal', className }: DividerProps) => {
    const dividerClasses = twMerge(clsx(
        'border border-transparent',
        orientation === 'vertical'
            ? 'h-full border-r-border dark:border-r-border-dark mx-1'
            : 'w-full border-b-border dark:border-b-border-dark my-1',
        className,
    ));

    return <div className={dividerClasses} />;
};