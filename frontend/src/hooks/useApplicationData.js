import { useEffect, useState, useReducer } from "react";
import axios from "axios";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  photoData: [],
  topicData: []
};
export const ACTIONS={
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload};
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload};
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
  
  const [state, dispatch] = useReducer(reducer, initialState)
 
useEffect(() => {
  fetch('http://localhost:8001/api/photos')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
    })
    .catch(error => console.error("There was an error with fetching data:", error));
}, []);

useEffect(() => {
  fetch('http://localhost:8001/api/topics')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
    })
    .catch(error => console.error("There was an error with fetching data:", error));
}, []);

const topicHandler = (topicId) => {
  fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
    })
    .catch(error => console.error("There was an error with fetching data:", error));
}

 // Function to check photo id of selected photo with database and then sets state to that photo
 const handleSelectedPhoto = (photoId) => {
   let photoSelection = state.photoData.find((photo) => photo.id === photoId);
   dispatch({type: ACTIONS.SELECT_PHOTO, payload: photoSelection})
 };

 const toggleFavourite = (photoId) => {
  dispatch({type: ACTIONS.TOGGLE_FAVOURITE, payload: photoId})
}



 return {
  isModalOpen: state.isModalOpen, 
  setIsModalOpen: (isOpen) => 
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: isOpen }),
  selectedPhoto: state.selectedPhoto,
  handleSelectedPhoto,
  favourites: state.favourites,
  toggleFavourite,
  photoData: state.photoData, 
  topicData: state.topicData,
  topicHandler,
 }
}

export default useApplicationData;