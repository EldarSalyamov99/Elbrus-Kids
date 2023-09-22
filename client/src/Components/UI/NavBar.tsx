import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaretLeftOutlined } from '@ant-design/icons';

export default function LeftBar(): JSX.Element {
  const [bool, setBool] = useState(false);
  return (
    <Layout hasSider>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <Link to="/signin">Войти</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">Зарегистрироваться</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">На главную</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/personal">Профиль</Link>
          </Menu.Item>
        </Menu>
        <CaretLeftOutlined />
      </Header>
    </Layout>
  );
}
