import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {
  console.log("home route props: ", props)
  // console.log("topicsProp: ", props.topics)

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar navTopics={props.topics} hello={"world"}/>
      <PhotoList photos={props.photos} />
    </div>
  );
};

export default HomeRoute;
