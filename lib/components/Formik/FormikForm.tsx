import React from 'react';
import { Formik, Form } from 'formik';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { BasicFormSchema } from '@/schemas';
import { FormikInput, FormikCheckBox, FormikRadioButton, FormikRadioGroup } from '@/features/Formik/components';

interface FormikForm {
    onSubmit: (formData: ObjectLiteralType) => void;
}

const FormikForm: React.FC<FormikForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        validationSchema={BasicFormSchema}
        onSubmit={onSubmit}
    >
        <Form>
            <FormRow>
                <FormikInput name="name" label="Your name" placeholder="Enter your name" />
            </FormRow>
            <FormRow>
                <FormikInput name="email" label="Email" placeholder="Enter your email" />
            </FormRow>
            <FormRow>
                <FormikRadioGroup name="sex" label="Your sex">
                    <FormikRadioButton name="sex" value="male">
                        Male
                    </FormikRadioButton>
                    <FormikRadioButton name="sex" value="female">
                        Female
                    </FormikRadioButton>
                </FormikRadioGroup>
            </FormRow>
            <FormRow>
                <FormikCheckBox label="Accept rules" name="rules">
                    By creating an account on our website you accept the terms and conditions.
                </FormikCheckBox>
            </FormRow>
            <FormRow>
                <Button type="submit">Submit</Button>
            </FormRow>
        </Form>
    </Formik>
);

export default FormikForm;
