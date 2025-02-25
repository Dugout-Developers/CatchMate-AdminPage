// 전체 레이아웃 (사이드바 포함 페이지 설정)
// children: 나타날 페이지
import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout.css';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService.js';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  // ✅ 로그아웃 핸들러
  const handleLogout = async () => {
    let { state } = await apiService.deleteTokenLogout();
    if (state) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/');
    } else {
      alert('로그아웃 실패');
    }
  };
  return (
    <div className="layout">
      <Sidebar />
      <section className="layout-content">
        <div className="top-container">
          <button className="logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
        <main className="content">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
