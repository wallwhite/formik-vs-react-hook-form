import React, { useContext } from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { RHFRadioButton, RHFRadioGroup } from '@/features/RHF/components';
import { StepperContext } from '@/components/Stepper/StepperContext';

const SexStep: React.FC = () => {
    const { setNextStep, setPrevStep } = useContext(StepperContext);

    return (
        <>
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

export default SexStep;
