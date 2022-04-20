import React from 'react';
import cx from 'clsx';
import type { NextPage } from 'next';

import { Table, TableRow, Panel } from '@macpaw/macpaw-ui';
import { LibrariesList, Seo } from '@/components';
import styles from '@/styles/Home.module.scss';

const Home: NextPage = () => {
    const listClassNames = cx(styles.grid, 'mb-24');

    return (
        <div className={styles.container}>
            <Seo title="Formik vs React Hook Form" description="Comparison between two libraries" />
            <main className={styles.main}>
                <h1 className={styles.title}>Formik VS React Hook Form</h1>
                <p className={styles.description}>Comparison between two libraries</p>
                <div className={listClassNames}>
                    <LibrariesList />
                </div>
                <div className={styles.advantages}>
                    <Panel>
                        <h2>Advantages</h2>
                        <Table>
                            <thead>
                                <TableRow>
                                    <th>Name</th>
                                    <th>Formik</th>
                                    <th>React Hook Form</th>
                                </TableRow>
                            </thead>
                            <tbody>
                                <TableRow>
                                    <td>SMS-free</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>No pain</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>No copy-paste</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>No useless code</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>Form hook</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>Utility hooks</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>Native validation support</td>
                                    <td>✅</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>Has builtin components</td>
                                    <td>✅</td>
                                    <td>🚫</td>
                                </TableRow>
                                <TableRow>
                                    <td>Supports class components</td>
                                    <td>✅</td>
                                    <td>🚫</td>
                                </TableRow>
                                <TableRow>
                                    <td>Optimization</td>
                                    <td>🚫</td>
                                    <td>✅</td>
                                </TableRow>
                                <TableRow>
                                    <td>Dependencies</td>
                                    <td>7</td>
                                    <td>WHOA - 0</td>
                                </TableRow>
                                <TableRow>
                                    <td>Issues</td>
                                    <td>576</td>
                                    <td>0 (but it's not true)</td>
                                </TableRow>
                                <TableRow>
                                    <td>Community</td>
                                    <td>Large</td>
                                    <td>Medium</td>
                                </TableRow>
                                <TableRow>
                                    <td>Unpacked Size</td>
                                    <td>580 kB</td>
                                    <td>776 kB</td>
                                </TableRow>
                                <TableRow>
                                    <td>Bundle Size</td>
                                    <td>~13kB</td>
                                    <td>~9kB + 0.5kb (resolvers)</td>
                                </TableRow>
                                <TableRow>
                                    <td>Github stars</td>
                                    <td>30.2k</td>
                                    <td>27.5k</td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </Panel>
                </div>
            </main>
        </div>
    );
};

export default Home;
