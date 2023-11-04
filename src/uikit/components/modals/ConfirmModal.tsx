import {Modal, ModalProps} from "./Modal.tsx";
import {Button} from "../Button.tsx";
import {useEffect} from "react";

export const ConfirmModal = (props: ModalProps) => {
    useEffect(() => {
        props.setValue(false);
    }, []);

    function confirmHandler() {
        props.setValue(true);
        props.close();
    }

    return (
        <Modal
            {...props}
            closeButtonCaption="No"
            controls={[
                <Button key='yes' color="primary" onClick={confirmHandler}>Yes</Button>
            ]}
        />
    );
}