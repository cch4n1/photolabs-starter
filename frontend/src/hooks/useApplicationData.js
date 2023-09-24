import { useState, useReducer } from "react";
import mockPhotos from "mocks/photos";

export const ACTIONS={
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {      
        ...state,
        isModalOpen: action.payload
      }; /* we'll come back to add logic here soon */
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      }; /* we'll come back to add logic here soon */
    case ACTIONS.TOGGLE_FAVOURITE:
      const photoId = action.payload;
      const isFavorite = state.favourites.includes(photoId);
      const updatedFavourites = isFavorite
        ? state.favourites.filter((favPhotoId) => favPhotoId !== photoId)
        : [...state.favourites, photoId];
      return { ...state, favourites: updatedFavourites };
    default: 
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favourites: []
  };
 
 const [state, dispatch] = useReducer(reducer, initialState)

 // Function to check photo id of selected photo with database and then sets state to that photo
 const handleSelectedPhoto = (photoId) => {
   let photoSelection = mockPhotos.find((photo) => photo.id === photoId);
   dispatch({type: ACTIONS.SELECT_PHOTO, payload: photoSelection})
 };

 const toggleFavourite = (photoId) => {
  dispatch({type: ACTIONS.TOGGLE_FAVOURITE, payload: photoId})
}

 return {
  isModalOpen: state.isModalOpen, 
  setIsModalOpen: (isOpen) => dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: isOpen }),
  selectedPhoto: state.selectedPhoto,
  handleSelectedPhoto,
  favourites: state.favourites,
  toggleFavourite
 }
}

export default useApplicationData;