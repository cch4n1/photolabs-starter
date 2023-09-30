import React, { useEffect, useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

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
    topicData,
    topicHandler,
    //dark mode imports
    darkMode, 
    toggleDarkMode
        } = useApplicationData();

return (
  <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <HomeRoute
        photos={photoData}
        topics={topicData}
        setIsOpen={setIsModalOpen}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={handleSelectedPhoto}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        topicHandler={topicHandler}
        //dark mode props
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
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
