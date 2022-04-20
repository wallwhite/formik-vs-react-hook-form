import React from 'react';
import Link from 'next/link';
import { Panel, Button } from '@macpaw/macpaw-ui';
import { routePaths } from '@/constants';
import styles from './LibrariesList.module.scss';

const LibrariesBlock: React.FC = () => (
    <>
        <Panel className={styles.panel}>
            <div className={styles.panelIcon}>👹</div>
            <h2>Formik</h2>
            <p className={styles.panelDescription}>Examples with using a formik library.</p>
            <Link href={routePaths.formik}>
                <Button wide>Try on</Button>
            </Link>
        </Panel>
        <Panel className={styles.panel}>
            <div className={styles.panelIcon}>🐲</div>
            <h2>React Hook Form</h2>
            <p className={styles.panelDescription}>The same examples using RHF lib.</p>
            <Link href={routePaths.rhf}>
                <Button wide>Try on</Button>
            </Link>
        </Panel>
    </>
);

export default LibrariesBlock;
