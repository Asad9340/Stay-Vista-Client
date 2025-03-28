import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';
const ImageCarousel = ({ imgCollection, title }) => {

  return (
    <Carousel showArrows={true}>
      {imgCollection.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`carousel-image-${index}`} />
          <p className="legend" style={{ opacity:0.8}} >Title: {title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
