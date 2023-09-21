import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {

  const [ favourites, setFavourites ] = useState([])

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      const copyOfFavourites = [ ...favourites ].filter(favPhotoId => favPhotoId !== photoId)
      setFavourites(copyOfFavourites);
      return;
    }   

    setFavourites(prev => [...prev, photoId]) 
  }

  console.log("home route props: ", props)
  // console.log("topicsProp: ", props.topics)

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar navTopics={props.topics} isFavPhotoExist={favourites.length > 0}/>
      <PhotoList 
      photos={props.photos}
      toggleFavourite={toggleFavourite}
      favourites={favourites}
      />
    </div>
  );
};

export default HomeRoute;
