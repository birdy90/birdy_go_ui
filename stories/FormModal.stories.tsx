import {Meta, StoryObj} from "@storybook/react";
import {Button, FormInput, FormSelect, ModalProps, useModal} from "../src";
import {FormModal} from "../src";

const StoryRenderComponent = (args: ModalProps) => {
    const modalId = 'some-modal';
    const modalData = useModal({
        id: modalId,
        onChange(val) {
            console.log(`Selected: ${JSON.stringify(val) ?? 'undefined'}`);
        }
    });

    return <>
        <Button onClick={modalData.open}>Open modal</Button>
        <FormModal {...args} {...modalData} />
    </>
}

export default {
    title: "Components/Modal",
    component: FormModal,
    render: StoryRenderComponent,
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
};
