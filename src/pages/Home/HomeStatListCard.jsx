import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/HomeStatListCard.css';
import UpArrow from '../../assets/img/upArrow.svg';
import {
  Body01,
  Body02,
  Headline01,
  Headline03,
} from '../../styles/FontStyle/Typography';

const HomeStatListCard = ({ title, dataList }) => {
  return (
    <div className="stat-list-card">
      <Body02 fontWeight="semiBold" className="stat-list-header">
        <p className="title">{title}</p>
        <p className="sort-title">유저순 정렬</p>
      </Body02>

      <ul className="stat-list">
        {dataList.map((item, index) => (
          <li key={index} className="stat-item">
            <Headline03
              fontWeight="semiBold"
              as="p"
              className="item-name"
              style={{ color: item.color }}
            >
              {item.name}
            </Headline03>
            <div className="item-stat">
              <div className="up-count">
                <span>
                  <img src={UpArrow} alt="상승" className="up-icon" />
                </span>
                <Body01 fontWeight="semiBold" as="span" className="up-text">
                  {item.upCount.toLocaleString()}
                </Body01>
              </div>
              <Headline01 fontWeight="semiBold" as="p" className="total-count">
                {item.totalCount.toLocaleString()}
              </Headline01>
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
