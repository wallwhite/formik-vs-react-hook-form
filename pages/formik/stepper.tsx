import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { FormikStepperForm, Seo } from '@/components';
import { formikStepper } from '@/constants';

const Stepper: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form - Formic stepper form"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={formikStepper} title="Formik">
                <FormikStepperForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Stepper;
