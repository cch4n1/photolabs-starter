import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import mockPhotos from "mocks/photos";
import mockTopics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {   
    isModalOpen, 
    setIsModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    handleSelectedPhoto,
    favourites,
    setFavourites,
    toggleFavourite 
        } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={mockPhotos}
        topics={mockTopics}
        setIsOpen={setIsModalOpen}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={handleSelectedPhoto}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          setIsOpen={setIsModalOpen}
          selectedPhoto={selectedPhoto}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
