"use client"
import Sidebar from '@/components/shared/Sidebar';
import { Button, Layout, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { ReactNode, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const {  Content,   } = Layout;

const DashboardLayout = ({children}:{children:ReactNode}) => {

 const {
    token: { colorBgContainer, },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='bg-white'>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {children}
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
    );
};

export default DashboardLayout;