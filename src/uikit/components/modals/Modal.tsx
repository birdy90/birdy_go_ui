import {PropsWithChildren, ReactNode} from "react";
import {ModalStore} from "../../hooks";
import {ModalCard} from "./ModalCard";
import {ModalWrapper} from "./ModalWrapper";

export interface ModalProps extends PropsWithChildren, ModalStore {
    id?: string;
    header?: ReactNode;
    closeButtonCaption?: string;
    controls?: ReactNode[];
}

export const Modal = (props: ModalProps) => {

    return <>
        <ModalWrapper {...props}>
            <ModalCard {...props} />
        </ModalWrapper>
    </>;
}