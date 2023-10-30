import {Meta, StoryObj} from "@storybook/react";
import {BiPlanet} from "react-icons/bi";
import {Button, ConfirmModal, Modal, ModalProps, useModal} from "../src";
import {FC} from "react";

const StoryRenderComponent = (args: ModalProps, as: FC<ModalProps> = Modal) => {
    const Component = as;
    const modalId = 'some-modal';
    const {open} = useModal({
        id: modalId,
    });

    return <>
        <Button onClick={open}>Open modal</Button>
        <Component {...args} modalId={modalId} onClose={() => console.log('modal closed')} />
    </>
}

export default {
    title: "Components/Modal",
    component: Modal,
    render: (args) => StoryRenderComponent(args),
} as Meta<typeof Modal>;

const commonArgs = {
    header: 'Some modal!',
    children: (
        <div className="flex justify-center">
            <BiPlanet size={128} />
        </div>
    ),
}

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        ...commonArgs,
    },
};

export const Confirm: Story = {
    args: {
        ...commonArgs,
    },
    render: (args) => StoryRenderComponent(args, ConfirmModal),
};
