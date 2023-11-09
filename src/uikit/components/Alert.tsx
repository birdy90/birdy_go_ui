import {Card, CardProps} from "../";
import {clsx} from "clsx";

export const Alert = ({color = 'default', className, ...props}: CardProps) => {
    const cardClasses = clsx(
        'border-none !shadow-none py-1',
        className,
    )

    return <Card {...props} color={color} className={cardClasses} />;
}
