// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './MyCarousel.css'; // Import your custom CSS file
// import myImage from './arya.jpg';
// import myImage1 from './ganesh.jpg';
// import myImage2 from './carbg.jpg';

// const MyCarousel = () => {
//   return (
//     <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
//       <div>
//       <img src={myImage} alt="ARYA STARC OF WINTERFELL" />
//         <p className="legend">ARYA STARC OF WINTERFELL </p>
//       </div>
//       <div>
//       <img src={myImage1} alt="My Image" />
//         <p className="legend"> LORD GANESHA</p>
//       </div>
//       <div>
//       <img src={myImage2} alt="My Image" />
//         <p className="legend">FOGG</p>
//       </div>
//       <div>
//         <img src="https://c4.wallpaperflare.com/wallpaper/532/79/825/the-avengers-iron-man-black-widow-loki-wallpaper-preview.jpg" alt="Image 4" />
//         <p className="legend">AVENGER</p>
//       </div>
//     </Carousel>
//   );
// };

// export default MyCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './ganesh.jpg';
import image2 from './arya.jpg';
import image3 from './carbg.jpg';
import image4 from './marvel.jpg';

const MyCarousel = ({ onImageClick }) => {
  return (
    <center>
    <Carousel emulateTouch>
           
      <div onClick={() => onImageClick(0)}>
        <img src={image1} alt="Image1" />
        <p className="legend">L O R D G A N E S H A</p>
      </div>
      <div onClick={() => onImageClick(1)}>
      <img src={image2} alt="Image2" />
        <p className="legend">A R Y A</p>
      </div>
      <div onClick={() => onImageClick(2)}>
      <img src={image3} alt="Image3" />
        <p className="legend">C A R FOGG</p>
      </div>
      <div onClick={() => onImageClick(3)}>
      <img src={image4} alt="Image4" />
        <p className="legend">MA R VEL</p>
      </div>
    </Carousel>
    </center>
  );
};

export default MyCarousel;
