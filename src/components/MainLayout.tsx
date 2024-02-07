import { Layout, Menu } from 'antd';
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
                <span className="text-text">Ant Design ©2018 Created by Ant UED</span>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
