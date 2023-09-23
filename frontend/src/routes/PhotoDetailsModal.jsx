import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  console.log("Photo Modal Props: ", props.selectedPhoto.similar_photos);

  const similarPhotosArr = Object.values(props.selectedPhoto.similar_photos);
  console.log("similar Photos Array: ", similarPhotosArr);

  return (
    <div className={`photo-details-modal`}>
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.setIsOpen(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__box">
        <img
          className="photo-details-modal__image"
          src={props.selectedPhoto.urls.regular}
        />

        <br />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__profile-picture"
            src={props.selectedPhoto.user.profile}
          />
          <br />
          <div className="user-info****">
            {props.selectedPhoto.user.name}
            <div className="user-location***">
              {props.selectedPhoto.location.city}{" "}
              {props.selectedPhoto.location.country}
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal--images">
        <PhotoList 
          photos={similarPhotosArr} 
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
