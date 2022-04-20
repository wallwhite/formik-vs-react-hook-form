import React from 'react';
import Link from 'next/link';
import { JSONTree } from 'react-json-tree';
import { Panel, Button } from '@macpaw/macpaw-ui';
import { BackIcon } from '@macpaw/macpaw-ui/lib/Icons/jsx';
import { CodeWindow, NavBar } from '@/components';
import { jsonViewerTheme, routePaths } from '@/constants';
import styles from './LibraryPreviewLayout.module.scss';

interface LibraryPreviewLayout {
    title: string;
    code: string;
    formData: ObjectLiteralType | null;
    children: React.ReactChild;
}

const LibraryPreviewLayout: React.FC<LibraryPreviewLayout> = ({ title, code, formData, children }) => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <Link href={routePaths.home}>
                <Button color="transparent" outline>
                    <BackIcon />
                </Button>
            </Link>
            <h1>{title}</h1>
        </div>
        <div>
            <NavBar />
        </div>
        <div className={styles.content}>
            <div className={styles.contentCard}>
                <Panel className="mb-24">{children}</Panel>
                <Panel>
                    <h2>Form data</h2>
                    {!formData ? 'Empty' : <JSONTree theme={jsonViewerTheme} data={formData} />}
                </Panel>
            </div>
            <div className={styles.contentCard}>
                <CodeWindow code={code} />
            </div>
        </div>
    </div>
);

export default LibraryPreviewLayout;
