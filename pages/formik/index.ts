import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { routePaths } from '@/constants';

const Page = (): void => {
    const router = useRouter();

    useEffect(() => {
        router.push(routePaths.formikBasic, undefined, { shallow: true });
    }, []);
};

export default Page;
