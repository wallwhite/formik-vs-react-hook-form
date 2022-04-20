/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Radio } from '@macpaw/macpaw-ui';
import { Field, FormikErrors, useFormikContext } from 'formik';
import type { RadioProps } from '@macpaw/macpaw-ui/lib/Radio/Radio';
import { getValueByPath } from '@/utils';

interface FormikRadioButton extends RadioProps, React.RefAttributes<HTMLInputElement> {
    name: string;
}

const FormikRadioButton: React.FC<FormikRadioButton> = ({ name, value, children, ...rest }) => {
    const { values, touched, errors } = useFormikContext<ObjectLiteralType>();

    const fieldValue = getValueByPath<ObjectLiteralType, string>(name, values);
    const error = getValueByPath<FormikErrors<ObjectLiteralType>, string>(name, errors);
    const isTouched = Boolean(getValueByPath(name, touched));
    const isChecked = fieldValue === value;
    const isInvalid = error && isTouched;
    const errorMessage = isInvalid ? error : '';

    return (
        <>
            <Field as={Radio} checked={isChecked} id={name} name={name} value={value} error={errorMessage} {...rest}>
                {children}
            </Field>
        </>
    );
};

export default FormikRadioButton;
