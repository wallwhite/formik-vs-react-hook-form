import React from 'react';
import { Checkbox } from '@macpaw/macpaw-ui';
import type { CheckboxProps } from '@macpaw/macpaw-ui/lib/Checkbox/Checkbox';
import { useController, useFormContext } from 'react-hook-form';

interface RHFCheckBox extends CheckboxProps, React.RefAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

const RHFCheckBox: React.FC<RHFCheckBox> = ({ name, label, children, ...rest }) => {
    const { control } = useFormContext();
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error, isTouched },
        formState: { isSubmitted },
    } = useController({ name, control });

    const isInvalid = error && (isTouched || isSubmitted);

    return (
        <>
            {Boolean(label) && (
                <label className="input-label h6" htmlFor={name}>
                    {label}
                </label>
            )}
            <Checkbox
                checked={value}
                id={name}
                name={name}
                ref={ref}
                error={isInvalid}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            >
                {children}
            </Checkbox>
        </>
    );
};

export default RHFCheckBox;
