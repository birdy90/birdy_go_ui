import {BaseCard, CardProps} from "./BaseCard";
import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const Card = (props: CardProps) => {
    return (
        <BaseCard {...props} className={twMerge(clsx('shadow', props.className))} />
    );
};
Card.displayName = "Card";
