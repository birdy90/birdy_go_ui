import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

interface DividerProps {
    className?: string;
    orientation?: 'vertical' | 'horizontal';
}

export const Divider = ({ orientation = 'horizontal', className }: DividerProps) => {
    const dividerClasses = twMerge(clsx(
        'border border-t-transparent border-l-transparent',
        orientation === 'vertical'
            ? 'h-full border-r-border border-b-transparent dark:border-r-border-dark mx-1'
            : 'w-full border-b-border border-r-transparent dark:border-b-border-dark my-1',
        className,
    ));

    return <div className={dividerClasses} />;
};