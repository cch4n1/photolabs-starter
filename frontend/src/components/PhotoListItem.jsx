import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={props.toggleFavourite}
        photoId={props.photoData.id}
        favourites={props.favourites}
      />
      <img
        className="photo-list__image"
        src={props.photoData.urls.regular}
        onClick={() => {
          props.setIsOpen(true);
          props.setSelectedPhoto(props.photoData.id)
        }}
      />
      <br />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photoData.user.profile}
        />
        <br />
        <div className="photo-list__user-info">
          {props.photoData.user.name}
          <div className="photo-list__user-location">
            {props.photoData.location.city} {props.photoData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
