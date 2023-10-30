import {atom, useAtom} from "jotai";
import {useEffect} from "react";

interface ModalStateOptional {
    isOpen: boolean;
    value?: unknown;
}

interface ModalState extends ModalStateOptional {
    id: string;
}

interface ModalOptions extends Partial<ModalStateOptional> {
    id: string;
}

interface ModalStore {
    modal: ModalState;
    open: () => void;
    close: () => void;
    setValue: (value: unknown) => void;
}

const modalsAtom = atom<ModalState[]>([])

export const useModal = (props: ModalOptions): ModalStore => {
    const {id, isOpen: defaultOpen = false, value: defaultValue = null} = props;
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
        setAtom([...atom]);
    }

    function closeModal() {
        const modalIndex = atom.findIndex(t => t.id === id);
        if (!atom[modalIndex]?.isOpen) return;
        atom[modalIndex].isOpen = false;
        setAtom([...atom]);
    }

    function setValue(value: unknown) {
        const modalIndex = atom.findIndex(t => t.id === id);
        if (!atom[modalIndex]) return;
        atom[modalIndex].value = value;
        setAtom([...atom]);
    }

    return {
        modal: modal ?? {id: '/default/', isOpen: false, value: 0},
        open: openModal,
        close: closeModal,
        setValue,
    }
}