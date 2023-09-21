import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const handleClick = () => {
    props.toggleFavourite(props.photoId)
  };

  const selected = props.favourites.includes(props.photoId)

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;