/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect, MutableRefObject, ReactElement } from 'react';
import { StepperContextValueType, StepperContext } from './StepperContext';

type StepperProps = {
    children: React.ReactNode;
    initialStep: string;
    innerRef?: MutableRefObject<StepperContextValueType | null>;
    onFinish?: () => void;
};

const Stepper: React.FC<StepperProps> = ({ children, initialStep = '', innerRef, onFinish = (): void => {} }) => {
    const [steps, setSteps] = useState<string[]>([]);
    const initialStepIndex = Math.max(steps.indexOf(initialStep), 0);
    const [currentStep, setCurrentStep] = useState(initialStepIndex);

    const maxStep = steps.length - 1;
    const currentStepKey = steps[currentStep];

    const setNextStep = (): void => setCurrentStep((step: number) => (step === maxStep ? maxStep : step + 1));

    const setPrevStep = (): void => setCurrentStep((step: number) => (step === 0 ? 0 : step - 1));

    const setStep = (step: string): void => {
        const nextStep = Math.max(steps.indexOf(step), 0);

        setCurrentStep(nextStep);
    };

    const providerValue = {
        steps,
        setNextStep,
        setPrevStep,
        currentStep,
        currentStepKey,
        maxStep,
        setStep,
        onFinish,
    };

    useEffect(() => setCurrentStep(initialStepIndex), [initialStepIndex]);

    useEffect(() => {
        if (!innerRef) return;

        innerRef.current = providerValue;
    }, [providerValue]);

    useEffect(() => {
        const elements = React.Children.toArray(children);
        const nextSteps = elements.map((element) => (element as ReactElement)?.props?.stepKey ?? '');

        setSteps(nextSteps);
    }, [children]);

    return (
        <StepperContext.Provider value={providerValue}>
            {React.Children.toArray(children).map((element, index) =>
                React.cloneElement(element as ReactElement, { ...(element as ReactElement).props, step: index }),
            )}
        </StepperContext.Provider>
    );
};

export default Stepper;
