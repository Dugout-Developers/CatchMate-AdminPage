import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import Posts from './pages/Posts.jsx';
import Reports from './pages/Reports.jsx';
import Inquiries from './pages/Inquiries.jsx';
import Notices from './pages/Notices.jsx';

function App() {
  return (
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
  );
}

export default App;
