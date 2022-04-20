import React, { useContext } from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { RHFInput } from '@/features/RHF/components';
import { StepperContext } from '@/components/Stepper/StepperContext';

const NameStep: React.FC = () => {
    const { setNextStep } = useContext(StepperContext);

    return (
        <>
            <FormRow>
                <RHFInput name="name" label="Your name" placeholder="Enter your name" />
            </FormRow>
            <FormRow split>
                <div />
                <Button color="secondary" onClick={setNextStep}>
                    Next
                </Button>
            </FormRow>
        </>
    );
};

export default NameStep;
