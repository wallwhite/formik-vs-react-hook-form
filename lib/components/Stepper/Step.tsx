import React, { useContext } from 'react';
import { StepperContext } from './StepperContext';

export interface StepItemProps {
    step: number;
    stepKey: string;
    maxStep: number;
    onFinish: () => void;
    setStep: (step: string) => void;
    setNextStep: () => void;
    setPrevStep: () => void;
}

type StepRenderFNType = (props: StepItemProps) => JSX.Element;

interface Step {
    stepKey: string;
    step?: number;
    children?: StepRenderFNType | React.ReactNode;
}

const Step: React.FC<Step> = ({ stepKey, step = 0, children }) => {
    const { currentStep, setNextStep, setPrevStep, setStep, maxStep, onFinish } = useContext(StepperContext);
    const isActiveStep = step === currentStep;

    if (!isActiveStep) return null;

    return (
        <>
            {typeof children === 'function'
                ? (children as StepRenderFNType)({
                      setNextStep,
                      setPrevStep,
                      stepKey,
                      step,
                      setStep,
                      maxStep,
                      onFinish,
                  })
                : (children as React.ReactNode)}
        </>
    );
};

export default Step;
