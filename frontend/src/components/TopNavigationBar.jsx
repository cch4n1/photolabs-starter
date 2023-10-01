import { useState, React } from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(props.darkMode);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the local state
    props.toggleDarkMode(); // Toggle the parent's dark mode state
  };
  
  return (
   <div className={`top-nav-bar ${isDarkMode ? 'dark-mode' : ''}`}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={ props.navTopics } topicHandler={props.topicHandler}/>
      <FavBadge isFavPhotoExist={ props.isFavPhotoExist }/>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default TopNavigation;