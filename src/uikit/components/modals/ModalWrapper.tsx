import {PropsWithChildren} from "react";
import {Dialog, Modal as UiModal, ModalOverlay} from 'react-aria-components';
import {ModalState} from "../../hooks";
import {clsx} from "clsx";

interface ModalWrapperProps extends PropsWithChildren {
    modalState?: ModalState;
}

export const ModalWrapper = (props: ModalWrapperProps) => {
    const overlayClasses = clsx(
        'flex items-center justify-center fixed text-center',
        'inset-0 z-10 overflow-y-auto min-h-[100dvh] w-[100dvw] p-4',
        'bg-white/50 dark:bg-black/25 backdrop-blur-[5px]'
    );

    return (
        <ModalOverlay className={overlayClasses} isOpen={props.modalState?.isOpen}>
            <UiModal className="bg-white rounded-xl min-w-[400px]">
                <Dialog className="outline-none">
                    {props.children}
                </Dialog>
            </UiModal>
        </ModalOverlay>
    );
}