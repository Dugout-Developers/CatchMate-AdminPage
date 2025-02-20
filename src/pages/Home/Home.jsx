import React from 'react';
import HomeStatCard from './HomeStatCard';
import '../../styles/Home.css';
import { mockData, styleMockData, teamMockData } from '../../data/homeMockData';
import HomeStatListCard from './HomeStatListCard';

function Home() {
  return (
    <div className="home">
      {/* HomeStatCard에 데이터 전달 */}
      <section className="stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
      <section className="team-stat-container container">
        <HomeStatListCard title="구단별 가입자 수" dataList={teamMockData} />
      </section>
      <section className="style-stat-container container">
        <HomeStatListCard
          title="응원스타일별 가입자 수"
          dataList={styleMockData}
        />
      </section>
      <section className="cs-stat-container container">
        <HomeStatCard className="card" item={mockData} />
        <HomeStatCard className="card" item={mockData} />
      </section>
    </div>
  );
}

export default Home;
