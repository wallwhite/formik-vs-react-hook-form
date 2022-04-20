import React from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { RHFForm, RHFInput, RHFRadioButton, RHFRadioGroup, RHFCheckBox } from '@/features/RHF/components';
import { BasicFormSchema } from '@/schemas';

interface RHFBasicForm {
    onSubmit: (formData: ObjectLiteralType) => void;
}

const RHFBasicForm: React.FC<RHFBasicForm> = ({ onSubmit }) => (
    <RHFForm
        initialValues={{ name: '', email: '', sex: '', rules: false }}
        validationSchema={BasicFormSchema}
        onSubmit={onSubmit}
    >
        <FormRow>
            <RHFInput name="name" label="Your name" placeholder="Enter your name" />
        </FormRow>
        <FormRow>
            <RHFInput name="email" label="Email" placeholder="Enter your email" />
        </FormRow>
        <FormRow>
            <RHFRadioGroup name="sex" label="Your sex">
                <RHFRadioButton name="sex" value="male">
                    Male
                </RHFRadioButton>
                <RHFRadioButton name="sex" value="female">
                    Female
                </RHFRadioButton>
            </RHFRadioGroup>
        </FormRow>
        <FormRow>
            <RHFCheckBox label="Accept rules" name="rules">
                By creating an account on our website you accept the terms and conditions.
            </RHFCheckBox>
        </FormRow>
        <FormRow>
            <Button type="submit">Submit</Button>
        </FormRow>
    </RHFForm>
);

export default RHFBasicForm;
