import { Layout } from 'antd';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/logo.png';

const { Header, Content, Footer } = Layout;

interface MainLayoutProp {
    children: any;
}

const MainLayout: React.FC<MainLayoutProp> = ({ children }) => {
    return (
        <Layout className="flex flex-col w-full flex-1">
            <Header className="bg-background2 relative px-30">
                <div className="h-full text-left relative">
                    <Image src={logo} layout="fill" objectFit="contain" objectPosition="left" />
                </div>
            </Header>
            <Content className="p-30 bg-background flex flex-row">{children}</Content>
            <Footer className="bg-background2" style={{ textAlign: 'center' }}>
                <span className="text-text">ABCD ©2023 Created by NicheTensor</span>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
