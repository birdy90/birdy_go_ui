import {atom, useAtom} from "jotai";
import {useEffect, useId} from "react";

export interface ModalState {
    id: string;
    isOpen: boolean;
    value?: unknown;
    onChange?: (value: unknown) => void;
}

interface ModalOptions {
    id: string;
    defaultOpen?: boolean;
    onChange?: (value: unknown) => void;
    defaultValue?: unknown;
}

export interface ModalStore {
    modalState: ModalState;
    open: () => void;
    close: () => void;
    setValue: (value: unknown) => void;
}

const modalsAtom = atom<ModalState[]>([])

export const useModal = (props: ModalOptions): ModalStore => {
    const generatedId = useId();
    const {id, defaultOpen = false, defaultValue} = props;
    const [atom, setAtom] = useAtom(modalsAtom);

    const modal = atom.find(t => t.id === id);

    useEffect(() => {
        if (modal) return;

        setAtom([
            ...atom,
            {id, isOpen: defaultOpen, value: defaultValue},
        ]);

        return () => {
            setAtom(atom.filter(t => t.id !== id));
        }
    }, []);

    function openModal() {
        const modalIndex = atom.findIndex(t => t.id === id);
        if (atom[modalIndex]?.isOpen) return;
        atom[modalIndex].isOpen = true;
        atom[modalIndex].value = defaultValue;
        setAtom([...atom]);
    }

    function closeModal() {
        const modalIndex = atom.findIndex(t => t.id === id);
        if (!atom[modalIndex]?.isOpen) return;
        atom[modalIndex].isOpen = false;
        setAtom([...atom]);
        props.onChange?.(atom[modalIndex].value);
    }

    function setValue(value: unknown) {
        const modalIndex = atom.findIndex(t => t.id === id);
        if (!atom[modalIndex]) return;
        atom[modalIndex].value = value;
        setAtom([...atom]);
    }

    return {
        modalState: modal ?? {id: generatedId, isOpen: false, value: 0},
        open: openModal,
        close: closeModal,
        setValue,
    }
}