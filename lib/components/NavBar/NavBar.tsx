import React from 'react';
import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@macpaw/macpaw-ui';
import { routePaths } from '@/constants';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
    const { pathname } = useRouter();

    const currentLib = pathname.startsWith('/formik') ? 'formik' : 'rhf';

    const wrapperClassNames = cx(styles.wrapper, 'mb-24');

    const getButtonClassName = (buttonPath: string): string =>
        cx(styles.button, {
            [styles.activeButton]: pathname === buttonPath,
        });
    const basicFormPath = routePaths[`${currentLib}Basic`];
    const stepperFormPath = routePaths[`${currentLib}Stepper`];
    const dynamicFormPath = routePaths[`${currentLib}Dynamic`];

    return (
        <div className={wrapperClassNames}>
            <Link href={basicFormPath}>
                <Button color="transparent" className={getButtonClassName(basicFormPath)}>
                    Basic
                </Button>
            </Link>
            <Link href={stepperFormPath}>
                <Button color="transparent" className={getButtonClassName(stepperFormPath)}>
                    Step form
                </Button>
            </Link>
            <Link href={dynamicFormPath}>
                <Button color="transparent" className={getButtonClassName(dynamicFormPath)}>
                    Dynamic form
                </Button>
            </Link>
        </div>
    );
};

export default NavBar;
