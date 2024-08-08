import { useEffect, useState } from 'react';
import css from '../CamperCard/CamperCard.module.css';
import Iconsvg from '../Icon/Icon';
import CamperModal from '../../modal/CamperModal';

const FavoriteCamper = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(camper._id)) {
      setIsFavorite(true);
    }
  }, [camper._id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(camper._id)) {
      const updatedFavorites = favorites.filter(id => id !== camper._id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(camper._id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const { adults, transmission, engine, details } = camper;

  const camperPros = [
    {
      label: adults === 1 ? 'adult' : 'adults',
      value: adults,
      iconName: 'people',
    },
    {
      label: '',
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: 'automatic',
    },
    {
      label: '',
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: 'petrol',
    },
    {
      label: '',
      value:
        details.kitchen > 0
          ? details.kitchen === 1
            ? 'Kitchen'
            : `${details.kitchen} kitchens`
          : '',
      iconName: 'kitchen',
    },
    {
      label: details.beds === 1 ? 'bed' : 'beds',
      value: details.beds,
      iconName: 'bed',
    },
    {
      label: '',
      value: details.airConditioner > 0 ? 'AC' : '',
      iconName: 'airContainer',
    },
  ];

  return (
    <>
      <img
        src={camper.gallery[0]}
        alt={camper.name}
        className={css.camperImage}
      />
      <div className={css.camperInfo}>
        <div>
          <div className={css.camperTitle}>
            <h3>{camper.name}</h3>
            <div className={css.camperTop}>
              <span>&#8364;{camper.price}.00 </span>
              <button
                type="button"
                onClick={handleAddToFavorite}
                className={css.addToFavorite}
              >
                <Iconsvg
                  iconName="heart"
                  className={isFavorite ? css.iconHeartPressed : css.iconHeart}
                />
              </button>
            </div>
          </div>
          <div className={css.camperAddInfo}>
            <Iconsvg iconName="rating" className={css.iconRating} />
            <p className={css.camperRating}>{camper.rating}</p>
            <p className={css.camperReviews}>
              &#x2768;{camper.reviews.length} Reviews&#x2769;
            </p>
            <Iconsvg iconName="mapPin" className={css.iconMap} />
            <p>{camper.location}</p>
          </div>
        </div>

        <p className={css.camperDescr}>{camper.description}</p>

        <ul className={css.camperPros}>
          {camperPros.map(
            ({ label, value, iconName }) =>
              value && (
                <li
                  className={css.camperProsItem}
                  key={`${camper._id}-${iconName}`}
                >
                  <Iconsvg
                    className={css.iconCamperItems}
                    iconName={iconName}
                  />
                  {value} {label}
                </li>
              )
          )}
        </ul>

        <button className={css.showMore} onClick={openModal}>
          Show more
        </button>
      </div>
      <CamperModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      />
    </>
  );
};

export default FavoriteCamper;
