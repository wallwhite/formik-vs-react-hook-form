import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { RHFStepperForm, Seo } from '@/components';
import { rhfStepper } from '@/constants';

const Dynamic: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form -React Hook stepper form"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={rhfStepper} title="React Hook Form">
                <RHFStepperForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Dynamic;
