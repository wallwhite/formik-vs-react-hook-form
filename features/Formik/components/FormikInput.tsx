import React from 'react';
import { Input } from '@macpaw/macpaw-ui';
import type { InputValueType } from '@macpaw/macpaw-ui/lib/types';
import { Field, FormikErrors, useFormikContext } from 'formik';
import type { InputProps } from '@macpaw/macpaw-ui/lib/Input/Input';
import { getValueByPath } from '@/utils';

interface FormikInput extends InputProps, React.RefAttributes<HTMLInputElement> {
    name: string;
    validateOnChange?: boolean;
}

const FormikInput: React.FC<FormikInput> = ({ name, validateOnChange, ...rest }) => {
    const {
        values,
        touched,
        errors,
        setFieldValue,
        setFieldError,
        setFieldTouched,
    } = useFormikContext<ObjectLiteralType>();

    const value = getValueByPath<ObjectLiteralType, string>(name, values);
    const error = getValueByPath<FormikErrors<ObjectLiteralType>, string>(name, errors);
    const isTouched = Boolean(getValueByPath(name, touched));
    const isInvalid = error && isTouched;
    const errorMessage = isInvalid ? error : '';

    const handleInputChange = (nextValue: InputValueType): void => {
        setFieldValue(name, String(nextValue));

        if (!validateOnChange) {
            setFieldTouched(name, false);
            setFieldError(name, '');
        }
    };

    return (
        <Field as={Input} name={name} value={value || ''} onChange={handleInputChange} error={errorMessage} {...rest} />
    );
};

export default FormikInput;
