import type { AppProps } from 'next/app';
import '@/client/styles/theme.less';
import '@/client/styles/globals.scss';
import MainLayout from '@/client/components/Layout/MainLayout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>NicheTensor - AI image generator</title>
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
