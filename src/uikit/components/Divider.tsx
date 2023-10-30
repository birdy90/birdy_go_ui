import {clsx} from "clsx";

interface DividerProps {
    orientation?: 'vertical' | 'horizontal';
}

export const Divider = ({ orientation = 'horizontal' }: DividerProps) => {
    const dividerClasses = clsx(
        'border border-transparent ',
        orientation === 'vertical' ? 'h-full border-r-border mx-1' : 'w-full border-b-border my-1'
    )
    return <div className={dividerClasses} />;
};