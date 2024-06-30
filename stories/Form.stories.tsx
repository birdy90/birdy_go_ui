import {Meta, StoryObj} from "@storybook/react";
import {Button, Card, Form, FormInput, FormSelect, DateInput} from "../src";
import {useState} from "react";

export default {
    title: "Components/Form",
    component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

const StoryForm = (
    defaultValues = {
        name: '',
        gender: '',
    },
) => {
    const [data, setData] = useState<unknown>();

    const genderOptions = [
        {label: 'Male', value: 'm'},
        {label: 'Female', value: 'f'},
    ];

    const onSubmit = (data: unknown) => {
        setData(data);
    }

    return (
        <Form className="flex flex-col gap-2 max-w-sm" onSubmit={onSubmit} defaultValues={defaultValues}>
            <FormInput name="name" label="Name" required rules={{required: true}} />
            <FormSelect name="gender" label="Gender" options={genderOptions} required />
            <DateInput name="date" required />

            <Button className="my-3" type="submit">Submit</Button>

            {Boolean(data) && <Card>
                <div className="text-gray-400">Submitted:</div>
                <code>{JSON.stringify(data)}</code>
            </Card>}
        </Form>
    );
}

export const Default: Story = {
    render: () => StoryForm(),
};

export const PrePopulated: Story = {
    render: () => StoryForm({
        name: 'Jane Doe',
        gender: 'f',
    }),
};