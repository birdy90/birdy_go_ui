import {PropsWithChildren, ReactNode} from "react";
import { Button } from "../Button.tsx";
import {useModal} from "../../hooks";
import {Dialog, Heading, Modal as UiModal, ModalOverlay} from 'react-aria-components';
import {Divider} from "../Divider.tsx";
import {Card} from "../Card.tsx";

export interface ModalRefData {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export interface ModalProps extends PropsWithChildren {
    id?: string;
    modalId: string;
    onClose: () => void;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
    header?: ReactNode;
    closeButtonCaption?: string;
    controls?: ReactNode[];
}

export const Modal = (props: ModalProps) => {
    const {
        header = null,
        closeButtonCaption = 'OK',
        children,
        controls = [],
        modalId,
    } = props;

    const {modal, close} = useModal({
        id: modalId,
    });

    return <>
        <ModalOverlay className="fixed inset-0 z-10 overflow-y-auto bg-white/25 flex min-h-[100dvh] w-[100dvw] items-center justify-center p-4 text-center backdrop-blur-[1px]" isOpen={modal.isOpen}>
            <UiModal className="bg-white rounded-xl min-w-[400px]">
                <Dialog className="outline-none">
                    {/*{({close}) => <>*/}
                    <Card header={header}>
                        <Heading>{children}</Heading>
                        <Divider />
                        <div className="flex gap-2 items-center justify-end pt-1">
                            {controls}
                            <Button onClick={close}>{closeButtonCaption}</Button>
                        </div>
                    </Card>
                </Dialog>
            </UiModal>
        </ModalOverlay>
    </>;
}