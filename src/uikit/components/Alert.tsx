import {ColorType, Card, CardProps} from "../";
import {clsx} from "clsx";

export interface AlertProps extends CardProps {
    color?: ColorType;
}

const colorMapping: Record<ColorType, string> = {
    danger: "bg-danger-100",
    default: "bg-default-100",
    primary: "bg-primary-100",
    warning: "bg-warning-100",
    success: "bg-success-100",
    secondary: "bg-secondary-100",
};

export const Alert = ({className, color, ...props}: AlertProps) => {
    const classes = clsx(className, colorMapping[color ?? "default"], "shadow-none");

    return <Card {...props} className={classes} />;
};
