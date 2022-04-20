import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

interface RHFArrayRenderProps {
    fields: Array<{ id: string }>;
    append: (value: string | ObjectLiteralType) => void;
    remove: (index: number | number[]) => void;
}

type ArrayRenderFNType = (props: RHFArrayRenderProps) => JSX.Element;

interface RHFArray {
    name: string;
    children: ArrayRenderFNType;
}

const RHFArray: React.FC<RHFArray> = ({ name, children }) => {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    return <>{children({ fields, append, remove })}</>;
};

export default RHFArray;
