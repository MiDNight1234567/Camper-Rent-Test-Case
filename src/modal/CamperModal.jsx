import Modal from 'react-modal';
import css from './CamperModal.module.css';
import Iconsvg from '../components/Icon/Icon';
import { useState } from 'react';
import BookForm from '../components/BookForm/BookForm';

Modal.setAppElement('#root');

const CamperModal = ({ isOpen, closeModal, camper }) => {
  const [activeTab, setActiveTab] = useState('Features');
  const handleTabChange = tabName => {
    setActiveTab(tabName);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalBackdrop}
      shouldCloseOnOverlayClick={true}
    >
      <button className={css.modalCloseButton} onClick={closeModal}>
        <Iconsvg iconName="close" className={css.iconClose} />
      </button>
      <div className={css.modalMainInfo}>
        <h2 className={css.modalTitle}>{camper.name}</h2>
        <div className={css.modalMainDescr}>
          <Iconsvg iconName="rating" className={css.iconRating} />
          <p className={css.modalRating}>{camper.rating}</p>
          <p className={css.modalReviews}>
            &#x2768;{camper.reviews.length} Reviews&#x2769;
          </p>
          <Iconsvg iconName="mapPin" className={css.iconMap} />
          {/* <p className={css.modalLocation}>{camper.location}</p> */}
          <p>{camper.location}</p>
        </div>
        <p className={css.modalPrice}>&#8364;{camper.price}.00</p>
      </div>

      <div className={css.modalInfo}>
        <ul className={css.imgContainer}>
          <li>
            <img
              className={css.camperImg}
              src={camper.gallery[0]}
              alt={camper.name}
            />
          </li>
          <li>
            <img
              className={css.camperImg}
              src={camper.gallery[1]}
              alt={camper.name}
            />
          </li>
          <li>
            <img
              className={css.camperImg}
              src={camper.gallery[2]}
              alt={camper.name}
            />
          </li>
        </ul>
        <div className={css.modalDescription}>{camper.description}</div>
        <div className={css.buttonWrapper}>
          <button
            type="button"
            onClick={() => handleTabChange('Features')}
            className={
              activeTab === 'Features' ? css.activeTab : css.buttonAddInfo
            }
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('Reviews')}
            className={
              activeTab === 'Reviews' ? css.activeTab : css.buttonAddInfo
            }
          >
            Reviews
          </button>
        </div>
        <div
          className={
            activeTab === 'Features' ? css.activeContainer : css.hidden
          }
        >
          <div className={css.featuresInfo}>
            <ul>
              <li></li>
            </ul>
          </div>
          <BookForm />
        </div>
        <div
          className={activeTab === 'Reviews' ? css.activeContainer : css.hidden}
        >
          <div className={css.reviewsInfo}>Reviews Content</div>
          <BookForm />
        </div>
      </div>
    </Modal>
  );
};

export default CamperModal;
