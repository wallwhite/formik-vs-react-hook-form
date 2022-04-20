import React from 'react';
import { Input } from '@macpaw/macpaw-ui';
import type { InputValueType } from '@macpaw/macpaw-ui/lib/types';
import type { InputProps } from '@macpaw/macpaw-ui/lib/Input/Input';
import { useController, useFormContext } from 'react-hook-form';

interface RHFInput extends InputProps, React.RefAttributes<HTMLInputElement> {
    name: string;
    validateOnChange?: boolean;
}

const RHFInput: React.FC<RHFInput> = ({ name, validateOnChange, ...props }) => {
    const { control, clearErrors, setValue } = useFormContext();
    const {
        field: { onBlur, value = '', ref },
        fieldState: { error, isTouched },
        formState: { isSubmitted },
    } = useController({ name, control });

    const isInvalid = error && (isTouched || isSubmitted);
    const errorMessage = isInvalid ? error?.message : '';

    const handleChange = (inputValue: InputValueType): void => {
        if (!validateOnChange && isInvalid) {
            clearErrors(name);
        }

        setValue(name, inputValue);
    };

    return (
        <Input
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            ref={ref}
            error={errorMessage}
            {...props}
        />
    );
};

export default RHFInput;
