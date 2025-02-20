import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/HomeStatListCard.css';
import UpArrow from '../../assets/upArrow.svg';

const HomeStatListCard = ({ title, dataList }) => {
  return (
    <div className="stat-list-card">
      <div className="stat-list-header">
        <p className="title">{title}</p>
        <p className="sort-title">유저순 정렬</p>
      </div>

      <ul className="stat-list">
        {dataList.map((item, index) => (
          <li key={index} className="stat-item">
            <span className="item-name" style={{ color: item.color }}>
              {item.name}
            </span>
            <div className="item-stat">
              <div className="up-count">
                <span>
                  <img src={UpArrow} alt="상승" className="up-icon" />
                </span>
                <span className="up-text">{item.upCount.toLocaleString()}</span>
              </div>
              <p className="total-count">{item.totalCount.toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// default Props
HomeStatListCard.defaultProps = {
  title: 'Title',
  dataList: [
    {
      name: 'NAME',
      upCount: 0,
      totalCount: 0,
      color: 'black',
    },
  ],
};
// PropTypes
HomeStatListCard.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      upCount: PropTypes.number.isRequired,
      totalCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HomeStatListCard;
