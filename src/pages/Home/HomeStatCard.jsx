import React from 'react';
import '../../styles/HomeStatCard.css';
import PropTypes from 'prop-types';
import UpArrow from '../../assets/upArrow.svg';

const HomeStatCard = ({ item }) => {
  const { title, totalCount, upCount } = item;
  return (
    <div className="stat-card">
      <p className="title">{title}</p>
      <div className="stat-count">
        <div className="up-count">
          <span>
            <img src={UpArrow} alt="상승" className="up-icon" />
          </span>
          <span className="up-text">{upCount}</span>
        </div>
        <p className="total-count">{totalCount.toLocaleString()}</p>
      </div>
    </div>
  );
};

// 기본값 설정
HomeStatCard.defaultProps = {
  item: {
    title: 'title',
    totalCount: 0,
    upCount: 0,
  },
};

// PropTypes
HomeStatCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string, // 제목은 문자열
    totalCount: PropTypes.number, // 전체 수는 숫자
    upCount: PropTypes.number, // 증가 수는 숫자
  }),
};

export default HomeStatCard;
