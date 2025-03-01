import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
        navTopics={props.topics} 
        isFavPhotoExist={props.favourites.length > 0}
        topicHandler={props.topicHandler}
      />
      <PhotoList 
        photos={props.photos}
        toggleFavourite={props.toggleFavourite}
        favourites={props.favourites}
        setIsOpen={props.setIsOpen}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
