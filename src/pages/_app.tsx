import type { AppProps } from 'next/app';
import '@/client/styles/theme.less';
import '@/client/styles/globals.scss';
import MainLayout from '@/client/components/Layout/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
