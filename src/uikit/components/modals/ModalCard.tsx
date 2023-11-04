import {PropsWithChildren, ReactNode} from "react";
import {Card, Divider, Button} from "../";

interface ModalCardProps extends PropsWithChildren {
    header?: ReactNode;
    controls?: ReactNode[];
    closeButtonCaption?: string;
    close: () => void;
}

export const ModalCard = (props: ModalCardProps) => {
    const {
        header = null,
        closeButtonCaption = 'OK',
        children,
        controls = [],
        close,
    } = props;

    return (
        <Card header={header}>
            <div className="text-left py-2">{children}</div>
            <Divider/>
            <div className="flex gap-2 items-center justify-end pt-1">
                {controls}
                <Button onClick={close}>{closeButtonCaption}</Button>
            </div>
        </Card>
    );
}