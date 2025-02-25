import React from 'react';
import HomeStatCard from './HomeStatCard';
import '../../styles/Home.css';
import { mockData, styleMockData, teamMockData } from '../../data/homeMockData';
import HomeStatListCard from './HomeStatListCard';
import { useEffect } from 'react';
import apiService from '../../services/apiService';
import { teams } from '../../constants/teams';
const transformTeamInfoDTO = (dto) => {
  if (!dto) return [];

  return Object.entries(dto).map(([teamId, supportCount]) => ({
    name: teams[teamId].name,
    upCount: 0,
    totalCount: supportCount,
    color: teams[teamId].color,
  }));
};
function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { teamSupportCountMap } = await apiService.getHomeTeamInfo();
        const transformData = transformTeamInfoDTO(teamSupportCountMap);
        console.log(transformData);
      } catch (error) {
        console.log('❌ API 호출 실패:', error);
      }
    };

    fetchData();
  }, []);
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
