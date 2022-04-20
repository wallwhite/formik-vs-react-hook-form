import React, { useContext } from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { FormikInput } from '@/features/Formik/components';
import { StepperContext } from '@/components/Stepper/StepperContext';

const EmailStep: React.FC = () => {
    const { setNextStep, setPrevStep } = useContext(StepperContext);
    return (
        <>
            <FormRow>
                <FormikInput name="email" label="Email" placeholder="Enter your email" />
            </FormRow>
            <FormRow split>
                <Button className="mr-16" outline onClick={setPrevStep}>
                    Prev
                </Button>
                <Button color="secondary" onClick={setNextStep}>
                    Next
                </Button>
            </FormRow>
        </>
    );
};

export default EmailStep;
