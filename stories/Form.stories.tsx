import {Meta, StoryObj} from "@storybook/react";
import {Button, Card, Form, FormInput, FormSelect} from "../src";
import {useState} from "react";

export default {
    title: "Components/Form",
    component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

const StoryForm = () => {
    const [data, setData] = useState<unknown>();

    const genderOptions = [
        {label: 'Male', value: 'm'},
        {label: 'Female', value: 'f'},
    ];

    const onSubmit = (data: unknown) => {
        setData(data);
    }

    const defaultValues = {
        name: '',
        gender: '',
    }

    return (
        <Form className="flex flex-col gap-2 max-w-[500px]" onSubmit={onSubmit} defaultValues={defaultValues}>
            <FormInput name="name" label="Name" />
            <FormSelect name="gender" label="Gender" options={genderOptions} />

            <Button className="my-3" type="submit">Submit</Button>

            {Boolean(data) && <Card>
                {JSON.stringify(data)}
            </Card>}
        </Form>
    );
}

export const Default: Story = {
    render: StoryForm,
};