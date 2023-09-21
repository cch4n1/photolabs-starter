import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {props.photos.map((photoData, index) => (
        <PhotoListItem 
        key={index} 
        photoData={photoData} 
        toggleFavourite={props.toggleFavourite}
        favourites={props.favourites}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
