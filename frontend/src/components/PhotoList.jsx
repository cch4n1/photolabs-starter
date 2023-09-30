import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map((photoData, index) => (
        <PhotoListItem 
        key={index} 
        photoData={photoData} 
        toggleFavourite={props.toggleFavourite}
        favourites={props.favourites}
        setIsOpen={props.setIsOpen}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
