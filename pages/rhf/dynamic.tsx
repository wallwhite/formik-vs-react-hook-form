import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { RHFDynamicForm, Seo } from '@/components';
import { rhfDynamic } from '@/constants';

const Dynamic: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form - React Hook Form dynamic version"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={rhfDynamic} title="React Hook Form">
                <RHFDynamicForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Dynamic;
