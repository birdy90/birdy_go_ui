import {Modal, ModalProps} from "./Modal.tsx";
import {Button} from "../Button.tsx";
import {useEffect} from "react";
import {useModal} from "../../hooks";

export const ConfirmModal = (props: ModalProps) => {
    const {modal, setValue} = useModal({
        id: props.modalId,
        value: false
    });

    console.log(modal);

    useEffect(() => {
        setValue(false);
    }, []);

    function confirmHandler() {
        setValue(true);
        close();
    }

    return (
        <Modal
            {...props}
            closeButtonCaption="No"
            controls={[
                <Button color="primary" onClick={confirmHandler}>Yes</Button>
            ]}
        />
    );
}