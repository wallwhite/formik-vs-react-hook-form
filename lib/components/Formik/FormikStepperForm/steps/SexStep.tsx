import React, { useContext } from 'react';
import { FormRow, Button } from '@macpaw/macpaw-ui';
import { FormikRadioGroup, FormikRadioButton } from '@/features/Formik/components';
import { StepperContext } from '@/components/Stepper/StepperContext';

const SexStep: React.FC = () => {
    const { setNextStep, setPrevStep } = useContext(StepperContext);

    return (
        <>
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
