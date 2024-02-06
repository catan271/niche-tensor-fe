import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '@/styles/globals.scss';
import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
