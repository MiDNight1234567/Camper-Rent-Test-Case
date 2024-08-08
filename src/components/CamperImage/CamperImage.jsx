import { useState } from 'react';
import css from './CamperImage.module.css';
import Iconsvg from '../../components/Icon/Icon';

const CamperImage = ({ images, imageIndex }) => {
  const [currentImage, setCurrentImage] = useState(imageIndex);
  const showPrevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  const showNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  return (
    <div className={css.modalBody}>
      {Array.isArray(images) && images.length > 0 && (
        <div className={css.imageModal}>
          <button className={css.back} onClick={showPrevImage}>
            <Iconsvg iconName="arrowLeft" className={css.arrow} />
          </button>
          <img className={css.image} src={images[currentImage]}></img>
          <button className={css.next} onClick={showNextImage}>
            <Iconsvg iconName="arrowRight" className={css.arrow} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CamperImage;
