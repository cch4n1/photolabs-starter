import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import mockPhotos from 'mocks/photos';
import mockTopics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Maintain state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectedPhoto = (photoId) => {

    let photoSelection = mockPhotos.find(photo => photo.id === photoId)
    setSelectedPhoto(photoSelection)
  }

  console.log("Selected Photo: ", selectedPhoto)

  return (
    <div className="App">
      <HomeRoute 
        photos={mockPhotos} 
        topics={mockTopics}
        setIsOpen={setIsModalOpen}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={handleSelectedPhoto}
      />
      {isModalOpen && <PhotoDetailsModal setIsOpen={setIsModalOpen}/>}

    </div>
  );
};

export default App;
