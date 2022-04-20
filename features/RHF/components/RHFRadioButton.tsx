import React from 'react';
import { Radio } from '@macpaw/macpaw-ui';
import type { RadioProps } from '@macpaw/macpaw-ui/lib/Radio/Radio';
import { useController, useFormContext } from 'react-hook-form';

interface RHFRadioButton extends RadioProps, React.RefAttributes<HTMLInputElement> {
    name: string;
}

const RHFRadioButton: React.FC<RHFRadioButton> = ({ name, children, value, ...rest }) => {
    const { control, setValue } = useFormContext();
    const {
        field: { onBlur, value: fieldValue },
        fieldState: { error, isTouched },
        formState: { isSubmitted },
    } = useController({ name, control });

    const isChecked = fieldValue === value;
    const isInvalid = error && (isTouched || isSubmitted);

    const handleChange = (): void => {
        setValue(name, value);
    };

    return (
        <Radio
            onChange={handleChange}
            checked={isChecked}
            onBlur={onBlur}
            id={name}
            name={name}
            error={isInvalid}
            {...rest}
        >
            {children}
        </Radio>
    );
};

export default RHFRadioButton;
