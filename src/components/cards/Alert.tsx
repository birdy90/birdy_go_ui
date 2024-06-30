import {clsx} from "clsx";
import {BaseCard, CardProps} from "./BaseCard";
import {twMerge} from "tailwind-merge";

export const Alert = ({color = 'default', className, ...props}: CardProps) => {
    const cardClasses = twMerge(clsx(
        'py-1 bg-back dark:bg-back-dark',
        className,
    ));

    return <BaseCard {...props} color={color} className={cardClasses} />;
}
