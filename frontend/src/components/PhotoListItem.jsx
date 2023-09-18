import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  const { data } = props;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={data.imageSource} /><br />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.profile} /><br />
        <div className="photo-list__user-info">
          {data.username}
          <div className="photo-list__user-location">
            {data.location.city} {data.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
