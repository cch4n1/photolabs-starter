import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Create an array with three identical objects
// const photos = new Array(3).fill(sampleDataForPhotoListItem);

// Note: Rendering a single component to build components in isolation
const App = () => {

  // /******** CHANGE photoListGrid Depending on how Data is received: *********/
  // /**  Is the Data already in an array or not? if not then it needs to be put in an array.  **/
  // const photoListArray = [sampleDataForPhotoListItem];

  return (
    <div className="App">
      {/* {photos.map((photoData, index) => (
        <PhotoListItem key={index} data={photoData} />
      ))} */}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
