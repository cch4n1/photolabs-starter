import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
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
    toggleFavourite,
    photoData,
    topicData
        } = useApplicationData();

return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
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
