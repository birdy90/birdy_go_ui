import {clsx} from "clsx";

interface DividerProps {
    orientation?: 'vertical' | 'horizontal';
}

export const Divider = ({ orientation = 'horizontal' }: DividerProps) => {
    const dividerClasses = clsx(
        'border border-transparent',
        orientation === 'vertical'
            ? 'h-full border-r-border dark:border-r-border-dark mx-1'
            : 'w-full border-b-border dark:border-b-border-dark my-1'
    )
    return <div className={dividerClasses} />;
};