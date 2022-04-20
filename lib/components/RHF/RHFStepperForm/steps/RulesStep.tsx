import React, { useContext } from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { RHFCheckBox } from '@/features/RHF/components';
import { StepperContext } from '@/components/Stepper/StepperContext';

const RulesStep: React.FC = () => {
    const { setPrevStep } = useContext(StepperContext);

    return (
        <>
            <FormRow>
                <RHFCheckBox label="Accept rules" name="rules">
                    By creating an account on our website you accept the terms and conditions.
                </RHFCheckBox>
            </FormRow>
            <FormRow split>
                <Button className="mr-16" outline onClick={setPrevStep}>
                    Prev
                </Button>
                <Button type="submit">Submit form</Button>
            </FormRow>
        </>
    );
};

export default RulesStep;
