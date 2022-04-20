import React from 'react';
import Head from 'next/head';

interface Seo {
    title: string;
    description: string;
}

const Seo: React.FC<Seo> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
);

export default Seo;
