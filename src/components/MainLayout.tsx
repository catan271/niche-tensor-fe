import { Layout } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

interface MainLayoutProp {
    children: any;
}

const MainLayout: React.FC<MainLayoutProp> = ({ children }) => {
    return (
        <Layout className="layout justify-between flex flex-col">
            <Header>
                <h1 className="text-white">NicheTensor</h1>
            </Header>
            <Content className="mb-auto h-screen bg-background" style={{ padding: '0 10px', height: '100vh' }}>
                {children}
            </Content>
            <Footer className="bg-btnBg" style={{ textAlign: 'center' }}>
                <span className="text-text">ABCD ©2023 Created by NicheTensor</span>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
