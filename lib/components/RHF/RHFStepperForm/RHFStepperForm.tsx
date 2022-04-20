import React from 'react';
import { Stepper, Step } from '@/components';
import { RHFForm } from '@/features/RHF/components';
import { EmailStep, NameStep, RulesStep, SexStep } from './steps';

interface RHFStepperForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const RHFStepperForm: React.FC<RHFStepperForm> = ({ onSubmit }) => (
    <RHFForm
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        onSubmit={onSubmit}
    >
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
    </RHFForm>
);

export default RHFStepperForm;
