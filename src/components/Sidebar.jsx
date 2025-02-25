import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

import LogoIcon from '../assets/img/logo.svg';
import UserIcon from '../assets/img/user.svg';
import GrowthIcon from '../assets/img/growth.svg';
import { Body02 } from '../styles/FontStyle/Typography';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: '홈', path: '/dashboard', icon: UserIcon },
    { name: '회원관리', path: '/users', icon: UserIcon },
    { name: '게시글', path: '/posts', icon: GrowthIcon },
    { name: '신고내역', path: '/reports', icon: GrowthIcon },
    { name: '문의사항', path: '/inquiries', icon: GrowthIcon },
    { name: '공지사항', path: '/notices', icon: GrowthIcon },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={LogoIcon} alt="CatchMateLogo" />
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <Link to={item.path} className="sidebar-link">
              <img src={item.icon} alt="{item.name}" className="menu-icon" />
              <Body02 fontWeight="semiBold" className="menu-title">
                {item.name}
              </Body02>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
