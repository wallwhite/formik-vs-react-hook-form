import React from 'react';
import { AnyObjectSchema } from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface RHFForm {
    children: React.ReactNode;
    validationSchema?: AnyObjectSchema;
    initialValues?: ObjectLiteralType;
    withDevTools?: boolean;
    onSubmit: (values: ObjectLiteralType) => void;
}

const RHFForm: React.FC<RHFForm> = ({ onSubmit, validationSchema, initialValues, children }) => {
    const form = useForm({
        mode: 'onBlur',
        defaultValues: initialValues,
        ...(validationSchema ? { resolver: yupResolver(validationSchema) } : {}),
    });

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
            </FormProvider>
        </>
    );
};

export default RHFForm;
