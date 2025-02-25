// 전체 레이아웃 (사이드바 포함 페이지 설정)
// children: 나타날 페이지
import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <section className="layout-content">
        <div className="top-container" />
        <main className="content">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
