import React from 'react';
import type { AppProps } from 'next/app';
import '@macpaw/macpaw-ui/lib/ui.css';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
