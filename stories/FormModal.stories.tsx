import {Meta, StoryObj} from "@storybook/react";
import {Button, FormInput, FormSelect, Modal, ModalProps, useModal} from "../src";
import {FC} from "react";
import {FormModal} from "../src/uikit/components/modals/FormModal";

const StoryRenderComponent = (args: ModalProps, as: FC<ModalProps> = Modal) => {
    const Component = as;
    const modalId = 'some-modal';
    const modalData = useModal({
        id: modalId,
        onChange(val) {
            console.log(`Selected: ${JSON.stringify(val) ?? 'undefined'}`);
        }
    });

    return <>
        <Button onClick={modalData.open}>Open modal</Button>
        <Component {...args} {...modalData} />
    </>
}

export default {
    title: "Components/Modal",
    component: FormModal,
    render: (args) => StoryRenderComponent(args),
} as Meta<typeof FormModal>;

type Story = StoryObj<typeof FormModal>;

const commonArgs = {
    header: 'Some modal!',
}

export const WithForm: Story = {
    args: {
        ...commonArgs,
        header: 'Tell us about yourself',
        children: <div className="flex flex-col gap-2">
            <FormInput name="name" label="Full name" />
            <FormSelect name="gender" label="Gender" defaultValue={undefined} options={[{value: 'm', label: 'Male'}, {value: 'f', label: 'Female'}]} />
        </div>,
        defaultValues: { name: '', gender: '' },
    },
    render: (args) => StoryRenderComponent(args, FormModal),
};
