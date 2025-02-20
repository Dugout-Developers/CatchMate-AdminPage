import React from 'react';
import HomeStatCard from './HomeStatCard';
import '../../styles/Home.css';
function Home() {
  const mockData = {
    title: '전체 유저수',
    totalCount: 9999,
    upCount: 60,
  };

  return (
    <div className="home">
      {/* HomeStatCard에 데이터 전달 */}
      <section className="stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
      <section className="team-stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
      <section className="style-stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
      <section className="cs-stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
    </div>
  );
}

export default Home;
