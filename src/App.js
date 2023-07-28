// import logo from './logo.svg';
// import './App.css';
// import MyCarousel from './main';

// const App = () => {
//   return (
//     <div>
//       <h1>My Carousel</h1>
//       <MyCarousel />
//     </div>
//   );
// };


// export default App;
import React, { useState } from 'react';
import MyCarousel from './main';
import ImageBox from './ImageBox';
import './MyCarousel.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(''); // Track the selected image URL

  const handleImageClick = (index) => {
    // Update the selected image based on the index
    setSelectedImage(`image-url-${index + 1}`);
  };

  return (
    <div>
      <center>
      <h3>CAROUSEL </h3>
      </center>
      <ImageBox selectedImage={selectedImage} />
      <MyCarousel onImageClick={handleImageClick} />
    </div>
  );
};

export default App;
