import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { FormikDynamicForm, Seo } from '@/components';
import { formikDynamic } from '@/constants';

const Dynamic: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form - Formic dynamic form"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={formikDynamic} title="Formik">
                <FormikDynamicForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Dynamic;
