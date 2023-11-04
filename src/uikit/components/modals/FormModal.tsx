import {ModalProps} from "./Modal";
import {Button} from "../Button";
import {useEffect} from "react";
import {Form} from "../inputs";
import {ModalCard} from "./ModalCard";
import {ModalWrapper} from "./ModalWrapper";

interface FormModalProps extends ModalProps {
    saveButtonCaption?: string;
    defaultValues?: { [x: string]: unknown; };
}

export const FormModal = (
    {
        saveButtonCaption = 'Save',
        defaultValues,
        ...props
    }: FormModalProps
) => {
    useEffect(() => {
        props.setValue(false);
    }, []);

    function onSubmit(data: unknown) {
        props.setValue(data);
        props.close();
    }

    return (
        <ModalWrapper {...props}>
            <Form onSubmit={onSubmit} defaultValues={defaultValues}>
                <ModalCard
                    closeButtonCaption="Cancel"
                    controls={[
                        <Button key='submit' color="primary" type="submit">{saveButtonCaption}</Button>
                    ]}
                    {...props}
                />
            </Form>
        </ModalWrapper>
    );
}