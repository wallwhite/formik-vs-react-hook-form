import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { FormikForm, Seo } from '@/components';
import { formikBasic } from '@/constants';

const Basic: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form - Formic regular form"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={formikBasic} title="Formik">
                <FormikForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Basic;
