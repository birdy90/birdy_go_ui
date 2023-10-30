import {Card, CardProps} from "../";

export const Alert = ({color = 'default', ...props}: CardProps) => {
    return <Card {...props} color={color} extendClassName="border-none !shadow-none" />;
}
