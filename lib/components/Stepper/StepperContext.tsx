import { createContext } from 'react';

export interface StepperContextValueType {
    steps: string[];
    currentStep: number;
    maxStep: number;
    currentStepKey: string | null;
    onFinish: () => void;
    setStep: (step: string) => void;
    setNextStep: () => void;
    setPrevStep: () => void;
}

const initialStepperValue: StepperContextValueType = {
    steps: [],
    currentStep: 0,
    maxStep: 0,
    currentStepKey: null,
    onFinish: () => {},
    setStep: () => {},
    setNextStep: () => {},
    setPrevStep: () => {},
};

export const StepperContext = createContext<StepperContextValueType>(initialStepperValue);
