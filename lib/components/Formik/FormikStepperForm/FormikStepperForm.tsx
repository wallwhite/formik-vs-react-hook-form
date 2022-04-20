import React from 'react';
import { Formik, Form } from 'formik';
import { Stepper, Step } from '@/components';
import { EmailStep, NameStep, RulesStep, SexStep } from './steps';

interface FormikStepperForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const FormikStepperForm: React.FC<FormikStepperForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        onSubmit={onSubmit}
    >
        <Form>
            <Stepper initialStep="name">
                <Step stepKey="name">
                    <NameStep />
                </Step>
                <Step stepKey="email">
                    <EmailStep />
                </Step>
                <Step stepKey="sex">
                    <SexStep />
                </Step>
                <Step stepKey="rules">
                    <RulesStep />
                </Step>
            </Stepper>
        </Form>
    </Formik>
);

export default FormikStepperForm;
