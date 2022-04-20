import React, { useState } from 'react';
import { LibraryPreviewLayout } from '@/layouts';
import { RHFBasicForm, Seo } from '@/components';
import { rhfBasic } from '@/constants';

const Basic: React.FC = () => {
    const [data, setData] = useState<ObjectLiteralType | null>(null);

    return (
        <>
            <Seo
                title="Formik vs React Hook Form - React Hook Form regular form"
                description="Comparison between two libraries"
            />
            <LibraryPreviewLayout formData={data} code={rhfBasic} title="React Hook Form">
                <RHFBasicForm onSubmit={setData} />
            </LibraryPreviewLayout>
        </>
    );
};

export default Basic;
