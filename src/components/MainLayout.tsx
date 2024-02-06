import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;
interface MainLayoutProp{
    children:any
}
const MainLayout: React.FC<MainLayoutProp> = ({children}) => {
    return (<Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
            />
        </Header>
        <Content style={{ padding: '0 50px', height:'80vh' }}>
            {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
};

export default MainLayout;