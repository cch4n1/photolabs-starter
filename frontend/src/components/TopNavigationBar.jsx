import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  console.log("top navigation props: ", props)

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={ props.navTopics }/>
      <FavBadge />
    </div>
  );
};

export default TopNavigation;