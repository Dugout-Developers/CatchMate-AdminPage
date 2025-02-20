import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Users from './pages/Users.jsx';
import Posts from './pages/Posts.jsx';
import Reports from './pages/Reports.jsx';
import Inquiries from './pages/Inquiries.jsx';
import Notices from './pages/Notices.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/FontStyle/GlobalStyle.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="/notices" element={<Notices />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
