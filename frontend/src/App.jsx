import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import mockPhotos from "mocks/photos";
import mockTopics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Maintain state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Maintain state for selected photo data: pass from home to modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Function to check photo id of selected photo with database and then sets state to that photo
  const handleSelectedPhoto = (photoId) => {
    let photoSelection = mockPhotos.find((photo) => photo.id === photoId);
    setSelectedPhoto(photoSelection);
  };



  return (
    <div className="App">
      <HomeRoute
        photos={mockPhotos}
        topics={mockTopics}
        setIsOpen={setIsModalOpen}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={handleSelectedPhoto}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          setIsOpen={setIsModalOpen}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
