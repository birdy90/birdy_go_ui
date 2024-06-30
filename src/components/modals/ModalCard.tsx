import {PropsWithChildren, ReactNode} from "react";
import {Button} from "../buttons/Button";
import {Card} from "../cards/Card";
import {Divider} from "../Divider";

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
        <Card header={header} className="shadow-xl">
            <div className="text-left py-2">{children}</div>
            <Divider/>
            <div className="flex gap-2 items-center justify-end pt-1">
                {controls}
                <Button onClick={close}>{closeButtonCaption}</Button>
            </div>
        </Card>
    );
}