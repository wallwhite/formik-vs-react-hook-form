import React from 'react';

interface RHFRadioGroup {
    name: string;
    label?: string;
    children: React.ReactNode;
}

const RHFRadioGroup: React.FC<RHFRadioGroup> = ({ name, label, children }) => (
    <div role="group">
        {Boolean(label) && (
            <label className="input-label h6" htmlFor={name}>
                {label}
            </label>
        )}
        {children}
    </div>
);

export default RHFRadioGroup;
