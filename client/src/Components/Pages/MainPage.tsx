import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import LeftBar from '../UI/NavBar';

export default function MainPage(): JSX.Element {
  const items = ['Войти', 'Зарегистрироваться', 'Профиль', 'Выход'].map((item) => ({
    key: item,
    label: item,
  }));

  return (
    <Layout>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    </Layout>
  );
}
