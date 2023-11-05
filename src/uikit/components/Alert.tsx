import {Card, CardProps} from "../";

export const Alert = ({color = 'default', ...props}: CardProps) => {
    return <Card {...props} color={color} className="border-none !shadow-none" />;
}
