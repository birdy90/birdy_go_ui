import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

interface ContainerProps extends PropsWithChildren {
    className?: string;
    narrow?: boolean;
}

export const Container = (props: ContainerProps) => {
    const containerClasses = twMerge(clsx(
        'mx-auto w-full px-4',
        props.narrow ? 'lg:px-0 max-w-5xl' : 'xl:px-0 max-w-7xl',
        props.className
    ));

    return <div className={containerClasses}>
        {props.children}
    </div>
}