import { useState } from 'react';

import css from './ModalImage.module.css';

import Iconsvg from '../../components/Icon/Icon';

const ModalImage = ({ images, imageIndex }) => {
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
      <button type="button" className={css.back} onClick={showPrevImage}>
        <Iconsvg iconName="arrowLeft" className={css.arrow} />
      </button>
      {Array.isArray(images) && images.length > 0 && (
        <div className={css.imgContainer}>
          <img
            className={css.image}
            alt="camper"
            src={images[currentImage]}
          ></img>
        </div>
      )}
      <button type="button" className={css.next} onClick={showNextImage}>
        <Iconsvg iconName="arrowRight" className={css.arrow} />
      </button>
    </div>
  );
};

export default ModalImage;
