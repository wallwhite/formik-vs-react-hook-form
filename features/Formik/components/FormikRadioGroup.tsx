import React from 'react';

interface FormikRadioGroup {
    name: string;
    label?: string;
    children: React.ReactNode;
}

const FormikRadioGroup: React.FC<FormikRadioGroup> = ({ name, label, children }) => (
    <div role="group">
        {Boolean(label) && (
            <label className="input-label h6" htmlFor={name}>
                {label}
            </label>
        )}
        {children}
    </div>
);

export default FormikRadioGroup;
