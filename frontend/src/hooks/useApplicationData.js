import { useState } from "react";
import mockPhotos from "mocks/photos";
import mockTopics from "mocks/topics";

const useApplicationData = () => {

 // Maintain state for the modal
 const [isModalOpen, setIsModalOpen] = useState(false);

 // Maintain state for selected photo data: pass from home to modal
 const [selectedPhoto, setSelectedPhoto] = useState(null);
 // Function to check photo id of selected photo with database and then sets state to that photo
 const handleSelectedPhoto = (photoId) => {
   let photoSelection = mockPhotos.find((photo) => photo.id === photoId);
   setSelectedPhoto(photoSelection);
 };

 const [ favourites, setFavourites ] = useState([])

 const toggleFavourite = (photoId) => {
   if (favourites.includes(photoId)) {
     const copyOfFavourites = [ ...favourites ].filter(favPhotoId => favPhotoId !== photoId)
     setFavourites(copyOfFavourites);
     return;
   }   

   setFavourites(prev => [...prev, photoId]) 
 }

 return {
  isModalOpen, 
  setIsModalOpen,
  selectedPhoto,
  setSelectedPhoto,
  handleSelectedPhoto,
  favourites,
  setFavourites,
  toggleFavourite
 }
}

export default useApplicationData;