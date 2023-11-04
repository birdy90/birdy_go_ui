import {PropsWithChildren} from "react";
import {Dialog, Modal as UiModal, ModalOverlay} from 'react-aria-components';
import {ModalState} from "../../hooks";

interface ModalWrapperProps extends PropsWithChildren {
    modalState: ModalState;
}

export const ModalWrapper = (props: ModalWrapperProps) => {
    const overlayClasses = 'fixed inset-0 z-10 overflow-y-auto bg-white/25 flex min-h-[100dvh] w-[100dvw] items-center justify-center p-4 text-center backdrop-blur-[1px]';

    return (
        <ModalOverlay className={overlayClasses} isOpen={props.modalState.isOpen}>
            <UiModal className="bg-white rounded-xl min-w-[400px]">
                <Dialog className="outline-none">
                    {props.children}
                </Dialog>
            </UiModal>
        </ModalOverlay>
    );
}