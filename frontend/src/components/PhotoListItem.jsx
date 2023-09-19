import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */

  const { data } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={data.urls.regular} /><br />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile} /><br />
        <div className="photo-list__user-info">
          {data.user.name}
          <div className="photo-list__user-location">
            {data.location.city} {data.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
