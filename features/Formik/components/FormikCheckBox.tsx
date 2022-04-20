/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Checkbox } from '@macpaw/macpaw-ui';
import { Field, FormikErrors, useFormikContext } from 'formik';
import type { CheckboxProps } from '@macpaw/macpaw-ui/lib/Checkbox/Checkbox';
import { getValueByPath } from '@/utils';

interface FormikCheckBox extends CheckboxProps, React.RefAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

const FormikCheckBox: React.FC<FormikCheckBox> = ({ name, label, children, ...rest }) => {
    const { values, touched, errors } = useFormikContext<ObjectLiteralType>();

    const value = getValueByPath<ObjectLiteralType, string>(name, values);
    const error = getValueByPath<FormikErrors<ObjectLiteralType>, string>(name, errors);
    const isTouched = Boolean(getValueByPath(name, touched));
    const isInvalid = error && isTouched;
    const errorMessage = isInvalid ? error : '';

    return (
        <>
            {Boolean(label) && (
                <label className="input-label h6" htmlFor={name}>
                    {label}
                </label>
            )}
            <Field as={Checkbox} checked={value} id={name} name={name} error={errorMessage} {...rest}>
                {children}
            </Field>
        </>
    );
};

export default FormikCheckBox;
