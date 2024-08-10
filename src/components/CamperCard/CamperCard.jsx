import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './CamperCard.module.css';

import Iconsvg from '../Icon/Icon';
import ModalCamper from '../../modals/ModalCamper/ModalCamper';
import { addFavorite, removeFavorite } from '../../redux/favorite/slice';
import { selectFavorites } from '../../redux/favorite/selectors';
import generateCamperPros from '../../utils/camperPros';
import { useModalContext } from '../../context/useModalContext';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const { openModal } = useModalContext();

  useEffect(() => {
    if (favorites.some(fav => fav._id === camper._id)) {
      setIsFavorite(true);
    }
  }, [favorites, camper._id]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
    setIsFavorite(!isFavorite);
  };

  const camperPros = generateCamperPros(camper);

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
              <span>&#8364;{camper.price.toFixed(2)}</span>
              <button
                type="button"
                onClick={handleToggleFavorite}
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

        <button
          type="button"
          className={css.showMore}
          onClick={() =>
            openModal('camper_modal', <ModalCamper camper={camper} />)
          }
        >
          Show more
        </button>
      </div>
    </>
  );
};

export default CamperCard;
